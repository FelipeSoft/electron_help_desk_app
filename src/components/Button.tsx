type Props = {
    label: string;
    type: "primary" | "secondary"
    flexible?: boolean;
    onClick?: () => void;
}

export const Button = ({ onClick, label, type, flexible }: Props) => {
    return (
        <button 
            onClick={onClick}
            className={`py-3 px-6 rounded-lg transition-all font-semibold
            ${flexible && "w-full"}
            ${type === "primary" && "bg-blue-500 text-white hover:bg-blue-600 "}
            ${type === "secondary" && "bg-white text-black border border-gray-400 hover:bg-gray-100 "}
            `}
        >
            {label}
        </button>
    )
}