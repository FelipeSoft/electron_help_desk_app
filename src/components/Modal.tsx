import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
    title: string;
    panel: React.ReactNode;
    visibility: boolean;
    size: "max-w-2xl" | "max-w-4xl" | "max-w-6xl" | "max-w-8xl"
    onClose: () => void;
};

export const Modal = ({ title, panel, visibility, size, onClose }: Props) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(visibility);

    useEffect(() => {
        if (visibility) {
            setVisible(true);
            if (modalRef.current) {
                modalRef.current.scrollTop = 0;
            }
        } else {
            setTimeout(() => {
                setVisible(false);
            }, 400);
        }
    }, [visibility]);

    if (!visible) {
        return null;
    }

    return (
        <div
            className={`
            ${visibility ? "animate-fade-up" : "animate-fade-down"}
            ${visible ? "block" : "hidden"}
            overflow-y-auto bg-white/50 w-screen h-screen fixed z-40 inset-0 transition-all lg:p-14
            `}
        >
            <section
                className={`bg-white w-full ${size} mx-auto shadow-2xl h-full rounded-2xl p-12 overflow-y-auto`}
                ref={modalRef}
            >
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <button
                        onClick={onClose}
                        className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center"
                        aria-label="Fechar Modal"
                    >
                        <X />
                    </button>
                </div>
                <article>{panel}</article>
            </section>
        </div>
    );
};
