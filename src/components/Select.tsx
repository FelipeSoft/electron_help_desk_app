import React, { useContext, useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

interface SelectProps {
    options: string[];
    placeholder: string | React.ReactNode;
    label: string;
    id: string;
    flexible?: boolean;
    onOptionSelect: (selectedOption: string | React.ReactNode) => void;
}

export const Select: React.FC<SelectProps> = ({ label, id, options, placeholder, flexible, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | React.ReactNode | null>(null);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
        setFocusedIndex(null);
    };

    const handleOptionClick = (option: string | React.ReactNode) => {
        setSelectedOption(option);
        setIsOpen(false);
        onOptionSelect(option);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab') {
            setIsOpen(false);
        } else if (event.key === 'ArrowUp' && isOpen) {
            if (focusedIndex === null || focusedIndex === 0) {
                setFocusedIndex(options.length - 1);
            } else {
                setFocusedIndex(focusedIndex - 1);
            }
        } else if (event.key === 'ArrowDown' && isOpen) {
            if (focusedIndex === null || focusedIndex === options.length - 1) {
                setFocusedIndex(0);
            } else {
                setFocusedIndex(focusedIndex + 1);
            }
        } else if (event.key === 'Enter') {
            if (isOpen) {
                if (focusedIndex !== null) {
                    handleOptionClick(options[focusedIndex]);
                } else {
                    handleOptionClick(selectedOption || placeholder);
                }
            } else {
                setIsOpen(true);
            }
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            setFocusedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div
            ref={selectRef}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            tabIndex={0}
            id={id}
            className={`${flexible ? 'w-full' : "w-64"} z-30 relative inline-block text-left font-semibold`}
            onKeyDown={handleKeyDown}
        >
            {label}
            <div
                id={id}
                className={`
          bg-blue-200 border-blue-200
          ${isOpen && 'text-blue-700 border-blue-700 outline-blue-600'}

          transition-all outline-none font-semibold 
          text-sm text-blue-500 w-full
          h-12 px-6 py-3
          border rounded-md cursor-pointer flex items-center justify-between gap-2 border-gray-300`}
                onClick={toggleSelect}
            >
                <div className={`${selectedOption === placeholder ? '' : ''}`}>
                    {<Filter className='text-blue-500' />}
                </div>
                <div>{isOpen ? <ChevronUp className='text-blue-500' /> : <ChevronDown className='text-blue-500' />}</div>
            </div>

            {isOpen && (
                <div
                    className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-gray-300 ring-1 ring-opacity-5`}
                >
                    <div className="py-1">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`
                  text-gray-700 hover:bg-gray-200
                  px-4 py-2 text-sm cursor-pointer 
                  ${index === focusedIndex ? 'bg-gray-300' : ''}
                `}
                                onClick={() => handleOptionClick(option)}
                                tabIndex={0}
                                role="option"
                                aria-selected={index === focusedIndex}
                                aria-setsize={options.length}
                                aria-posinset={index + 1}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};