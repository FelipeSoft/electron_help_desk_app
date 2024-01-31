import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    htmlFor: string;
    type: string;
    label: string;
    allows: "text" | "textarea";
    assistantMessage?: string;
    icon: React.ReactNode;
    typed: string;
    canValidate: boolean;
    className?: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input = ({ required, className, htmlFor, type, label, assistantMessage, allows, icon, typed, canValidate, onChange }: Props) => {
    const [error, setError] = useState<{ status: boolean, message: string }>({ status: false, message: "" });

    useEffect(() => {
        if (canValidate) {
            if (typed === "") {
                setError({status: true, message: "Este campo é obrigatório!"});
                return;
            }

            if (typed) {
                switch (allows) {
                    case "text":
                        if (typed.length < 10) {
                            setError({status: true, message: "Mínimo de 10 caracteres!"});
                            return;
                        }
                        break;
                    case "textarea":
                        if (typed.length < 20) {
                            setError({status: true, message: "Mínimo de 20 caracteres!"});
                            return;
                        }
                        break;
                }
            }
        }
        setError({status: false, message: ""});
    }, [canValidate, typed, allows]);

    return (
        <div className="flex flex-col input">
            <label htmlFor={htmlFor} className="group font-semibold w-full relative">
                {label}{required && <span className="text-red-500"> *</span>}
                {allows !== "textarea"
                    ? (
                        <input value={typed} id={htmlFor} onChange={onChange} className={`${error.status && "border-red-500 text-red-500 focus:border-red-500"} relative outline-none rounded-lg font-normal pl-6 pr-16 h-14 w-full border-2 focus:border-blue-500`} type={type} />
                    )
                    : (
                        <textarea id={htmlFor} onChange={onChange} className={`${error.status && "border-red-500 text-red-500 focus:border-red-500"} relative outline-none rounded-lg font-normal pl-6 pt-3 pr-16 h-48 w-full border-2 focus:border-blue-500 resize-none`} />
                    )}
                {!error.status ? icon : <AlertCircle className="text-red-500 absolute right-6 top-10" />}
            </label>
            <small className={`${!error.status ? "text-gray-500" : "text-red-500 error-message"} ${className}`}>{!error.status ? assistantMessage : error.message}</small>
        </div>
    )
}