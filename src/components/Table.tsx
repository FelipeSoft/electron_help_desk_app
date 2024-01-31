import { ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { Select } from './Select';
import { table } from 'console';

type Props = {
    columns: string[];
    data: any[];
    selectable?: boolean;
    filterables?: Filterable[];
    callback?: (key: number) => void;
};

export type Filterable = {
    key: string;
    values: string[];
}

export const Table = ({ callback, selectable, columns, data, filterables }: Props) => {
    const [selectedFilters, setSelectedFilters] = useState("");
    const [pagination, setPagination] = useState(1);
    const [currentFilter, setCurrentFilter] = useState("");
    const [finalFilter, setFinalFilter] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState([...data]);
    const [tableBody, setTableBody] = useState<React.ReactElement[]>([]);
    const [canShowFilterIcon, setCanShowFilterIcon] = useState(true);

    useEffect(() => {
        setSelectedFilters((prevFilter) => `${prevFilter}${currentFilter}`);
    }, [currentFilter]);

    useEffect(() => {
        const currentFilters = selectedFilters.split("|");
        if (currentFilters.length > 1) {
            currentFilters.pop();
        }
        setFinalFilter(currentFilters);
    }, [selectedFilters]);

    useEffect(() => {
        if (finalFilter.length >= 1 && finalFilter[0] !== "") {
            handleFilter();
        }
    }, [finalFilter]);

    const handleFilter = () => {
        const matchValue = finalFilter.map(filter => filter.split(":")[1]);
        const updatedFilteredData = data.filter(item =>
            matchValue.every(match => Object.values(item).includes(match))
        );
        setFilteredData(updatedFilteredData);
        setPagination(1);
    };

    useEffect(() => {
        renderTableBody();
    }, []);

    useEffect(() => {
        renderTableBody();
    }, [currentFilter, finalFilter, filteredData, pagination]);

    const renderTableHeader = () => {
        return (
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={`first:rounded-tl-xl last:rounded-tr-xl py-4 font-semibold text-left px-4`}>
                        {column}
                    </th>
                ))}
            </tr>
        );
    };

    const renderTableBody = () => {
        const bodyRows = [];
        const startIndex = (pagination - 1) * 5;
        const endIndex = Math.min(startIndex + 5, filteredData.length);

        for (let i = startIndex; i < endIndex && i < filteredData.length; i++) {
            const rowData = filteredData[i];
            const cells = [];

            for (const key in rowData) {
                if (rowData.hasOwnProperty(key)) {
                    cells.push(
                        <td
                            key={key}
                            className={`${"border-b-gray-200"
                                } transition-all px-4 py-4`}
                        >
                            {rowData[key].length > 30
                                ? rowData[key].substring(0, 30) + "..."
                                : rowData[key]}
                        </td>
                    );
                }
            }

            const rowKey = `row-${pagination}-${i}`;

            bodyRows.push(
                <tr
                    className={`
                ${'even:bg-gray-100'}
                ${selectable && 'cursor-pointer'}
                transition-all`}
                    onClick={() => callback && callback(i)}
                    key={rowKey}
                >
                    {cells}
                </tr>
            );
        }

        setTableBody(bodyRows);
    };

    const renderPaginationButtons = () => {
        const totalPages = Math.ceil(filteredData.length / 5);
        const startButton = Math.max(1, Math.min(pagination - 1, totalPages - 2));
        const endButton = Math.min(startButton + 2, totalPages);

        return Array.from({ length: endButton - startButton + 1 }, (_, index) => startButton + index).map((i) => (
            <button
                key={i}
                className={`${pagination === i
                    ? "text-white bg-blue-600"
                    : "hover:bg-gray-200 border-black"
                    } font-semibold flex items-center justify-center rounded-md w-8 h-8`}
                onClick={() => setPagination(i)}
            >
                {i}
            </button>
        ));
    };

    return (
        <div className="flex flex-col">
            {filterables && (
                <div className="flex flex-col mb-4">
                    <div className="flex flex-row-reverse items-center justify-between h-full mt-3">
                        <div className='flex items-center gap-4'>
                            <div className="flex items-end gap-4">
                                {filterables.map((element) => {
                                    return (
                                        <Select
                                            canShowDefaultIcon={canShowFilterIcon}
                                            options={element.values}
                                            placeholder={""}
                                            label={""}
                                            id={element.key + "@"}
                                            onOptionSelect={(selectedOption: string | ReactNode) => {
                                                setCanShowFilterIcon(false)
                                                if (selectedFilters.includes(`${element.key}:`)) {
                                                    const foundTermStart = selectedFilters.lastIndexOf(`${element.key}:`);
                                                    const foundTermEnd = selectedFilters.indexOf("|", foundTermStart);
                                                    const termToRemove = selectedFilters.substring(foundTermStart, foundTermEnd);
                                                    const newTerm = `${element.key}:${selectedOption}`;

                                                    const updatedFilters = selectedFilters.replace(termToRemove, newTerm);
                                                    setSelectedFilters(updatedFilters);
                                                } else {
                                                    setSelectedFilters((prevFilter) => `${prevFilter}${element.key}:${selectedOption}|`);
                                                }
                                            }}
                                        />
                                    )
                                })}
                            </div>
                            <div className='flex items-center gap-4'>
                                <button onClick={() => {
                                    setFilteredData(data)
                                    setCanShowFilterIcon(true)
                                }} className={`text-white h-12 w-12 rounded-lg bg-blue-500 flex transition-all items-center justify-center hover:bg-blue-600`} aria-label="Limpar Filtros"><X /></button>
                            </div>
                        </div>
                        {filteredData.length > 0
                            ? (
                                <h2 className="text-gray-500">Exibindo <span className="text-blue-500 font-semibold">{filteredData.length}</span> {filteredData.length === 1 ? "resultado" : "resultados"}</h2>
                            )
                            : null
                        }
                    </div>
                </div>
            )}
            {tableBody.length > 0 ? (
                <table className="w-full">
                    <thead className="bg-gray-100">
                        {renderTableHeader()}
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            ) : (
                <div className='h-32 bg-blue-200 w-full gap-4 text-xl font-semibold rounded-lg text-blue-500 flex items-center justify-center'>
                    Oops, nenhum chamado à vista... <div className='shadow-xl bg-white h-10 w-10 rounded-full flex items-center justify-center'>🔭</div>
                </div>
            )}
            {tableBody.length > 0 ? (
                <div className='w-full flex justify-end items-center mt-4 gap-2'>
                    <button onClick={() => pagination > 1 ? setPagination(pagination - 1) : null} className={`font-semibold flex items-center gap-1 ml-2`}><ChevronLeft className='' />Anterior</button>
                    {renderPaginationButtons()}
                    <button onClick={() => {
                        const totalPages = Math.ceil(filteredData.length / 5);
                        if (pagination < totalPages) {
                            setPagination(pagination + 1)
                        }
                    }} className={`font-semibold flex flex-row-reverse items-center gap-1 mr-2`}><ChevronRight className='' />Próximo</button>
                </div>
            ) : null}
        </div>
    );
};