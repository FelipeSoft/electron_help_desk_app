import { ArrowLeft } from "lucide-react"

export const ChatBot = () => {
    return (
        <div className="absolute bottom-10 right-10">
            <div className="flex items-center justify-center w-full relative">
                <button aria-label="Voltar" className="absolute left-0 bg-gray-200 rounded-lg h-12 w-12 flex items-center justify-center"><ArrowLeft/></button>
                <h1>Assistente Virtual</h1>
            </div>
        </div>
    )
}
