import { AlertTriangle, Check, Info, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    type: "info" | "warning" | "error" | "success"
    message: string;
    enable: boolean;
}

export const SnackBar = ({ type, message, enable }: Props) => {
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
        if (!enable) setTimer(0)

        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer < 10) {
                    return prevTimer + 1;
                } else {
                    clearInterval(interval);
                    return prevTimer;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [enable]);

    return (
        <div className={`
            ${type === "info" && "bg-blue-500"}
            ${type === "warning" && "bg-yellow-500"}
            ${type === "success" && "bg-green-600"}
            ${type === "error" && "bg-red-500"}
            ${enable ? "right-5 opacity-1" : "-right-48 opacity-0"}
            ${enable && timer === 10 && "-right-48 opacity-0"}
            w-max z-50 flex items-center justify-between pr-6 pb-2 fixed bottom-5 transition-all rounded-lg shadow-xl`}>
            <div className={`
                ${type === "info" && "bg-blue-500"}
                ${type === "warning" && "bg-yellow-500"}
                ${type === "success" && "bg-green-600"}
                ${type === "error" && "bg-red-500"}
                rounded-lg h-20 w-20 flex items-center justify-center
            `}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className={`
                        ${type === "info" && "bg-blue-500"}
                        ${type === "warning" && "bg-yellow-500"}
                        ${type === "success" && "bg-green-600"}
                        ${type === "error" && "bg-red-500"}
                        w-9 h-9 rounded-full flex items-center justify-center`}>
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                            {type === "info" && <Info strokeWidth={3} className="text-blue-500 h-5 w-5" />}
                            {type === "warning" && <AlertTriangle strokeWidth={3} className="text-yellow-500 h-5 w-5" />}
                            {type === "success" && <Check strokeWidth={3} className="text-green-600 h-5 w-5" />}
                            {type === "error" && <X strokeWidth={3} className="text-red-500 h-5 w-5" />}
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-white text-md mr-5">{message}</span>
            <button aria-label="Fechar Mensagem da Snackbar"><X className="text-white w-8 h-8" /></button>
            <div className={`transition-all w-full animate-progress absolute h-2 bg-white bottom-0`}></div>
        </div>
    )
}

