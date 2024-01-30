import { X } from "lucide-react"

type Props = {
    title: string;
    panel: React.ReactNode;
}

export const Modal = ({ title, panel }: Props) => {
    return (
        <div className="bg-white/50 w-screen h-screen fixed z-40 inset-0 lg:p-28">
            <section className="bg-white w-full lg:max-w-2xl mx-auto shadow-2xl h-full rounded-2xl p-12 overflow-y-auto">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <button className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center" aria-label="Fechar Modal"><X/></button>
                </div>
                <article>{panel}</article>
            </section>
        </div>
    )
}