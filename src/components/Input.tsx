type Props = {
    htmlFor: string;
    type: string;
    label: string;
    allows: "text" | "textarea";
    assistantMessage?: string;
    icon: React.ReactNode;
}

export const Input = ({ htmlFor, type, label, assistantMessage, allows, icon }: Props) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={htmlFor} className="group font-semibold w-full relative">
                {label}
                {allows !== "textarea"
                    ? (
                        <input id={htmlFor} className="relative outline-none rounded-lg font-normal pl-6 pr-16 h-14 w-full border-2 focus:border-blue-500" type={type} />
                    )
                    : (
                        <textarea id={htmlFor} className="relative outline-none rounded-lg font-normal pl-6 pt-3 pr-16 h-36 w-full border-2 focus:border-blue-500 resize-none" />
                    )}
                {icon}
            </label>
            <small className={`text-gray-500`}>{assistantMessage}</small>
        </div>
    )
}