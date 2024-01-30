import { Button } from "@/components/Button";
import { ImageUploader } from "@/components/ImageUploader";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { Badge, BadgeCheck, Book, BookMarked, Cog, Flag, HardDrive, LayoutDashboard, ListCollapse, ListEnd, ListX, PlusCircle } from "lucide-react";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    section: 0 | 1 | 2;
}

const MainLayout = ({ children, section }: Props) => {
    return (
        <div className="w-screen flex">
            <aside className="min-h-screen fixed border-r w-1/4 p-8 bg-white flex flex-col justify-between">
                <h1 className="text-2xl font-semibold text-center h-12 flex items-center justify-center"><Link href="/" >TH <span className="text-blue-500 font-bold">Helper</span></Link></h1>
                <ul>
                    <li className={`${section === 0 ? "bg-blue-500 text-white" : "cursor-pointer text-gray-500 hover:bg-gray-200"} transition-all rounded-lg mb-2 font-semibold py-4 px-8 flex items-center gap-4`}><LayoutDashboard /><Link className="rounded-lg" href="/">Dashboard</Link></li>
                    <li className={`${section === 1 ? "bg-blue-500 text-white" : "cursor-pointer text-gray-500 hover:bg-gray-200"} transition-all rounded-lg mb-2 font-semibold py-4 px-8 flex items-center gap-4`}><HardDrive /><Link className="rounded-lg" href="/">Hardware</Link></li>
                    <li className={`${section === 2 ? "bg-blue-500 text-white" : "cursor-pointer text-gray-500 hover:bg-gray-200"} transition-all rounded-lg mb-2 font-semibold py-4 px-8 flex items-center gap-4`}><Cog /><Link className="rounded-lg" href="/">Configurações</Link></li>
                </ul>
                <div className="bg-blue-200 rounded-lg p-8 flex flex-col items-center">
                    <h2 className="text-gray-800 font-semibold text-center">Assistente Virtual</h2>
                    <p className="text-gray-500 text-sm text-center">Conheça o nosso Assistente Virtual</p>
                    <button className="py-4 px-8 rounded-lg font-semibold bg-blue-500 mt-4 text-white transition-all hover:shadow-xl">Quero Ver!</button>
                </div>
            </aside>
            <div className="w-3/4 absolute right-0 overflow-y">
                <header className="bg-white border-b py-8 px-24 text-black flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Nome do Cliente</h3>
                    <div className="flex items-center gap-4">
                        <button className="rounded-lg font-semibold h-12 px-8 bg-blue-500 text-white transition-all hover:-translate-x-2 hover:shadow-xl flex items-center gap-4"><PlusCircle /> Novo Chamado</button>
                    </div>
                </header>
                <main className="bg-gray-100 h-full py-12 px-24">
                    {children}
                    <Modal
                        title={"Novo Chamado"}
                        panel={
                            <div className="flex flex-col gap-8 mt-8">
                                <Input
                                    icon={<BadgeCheck className="absolute group-focus-within:text-blue-500 text-gray-400 right-6 top-10" />}
                                    allows="text"
                                    htmlFor="description"
                                    label="Assunto"
                                    type="text"
                                    assistantMessage={`Informe brevemente o motivo, como "Problemas com...", "Dúvida sobre..." ou qualquer outra coisa.`}
                                />
                                <Input
                                    icon={<ListCollapse className="absolute group-focus-within:text-blue-500 text-gray-400 right-6 top-10" />}
                                    allows="textarea"
                                    htmlFor="subject"
                                    label="Descrição"
                                    type="text"
                                    assistantMessage={`Por favor, forneça o máximo de detalhes possível para que possamos atender sua solicitação da melhor maneira. Inclua informações relevantes e quando possível imagens e fotografias.`}
                                />
                                <ImageUploader />
                                <div className="flex items-center justify-end gap-4 mt-6">
                                    <Button
                                        label="Cancelar"
                                        type="secondary"
                                        onClick={() => ""}
                                        flexible={false}
                                    />
                                    <Button
                                        label="Abrir"
                                        type="primary"
                                        onClick={() => ""}
                                        flexible={false}
                                    />
                                </div>
                            </div>
                        }
                    />
                </main>
            </div>
        </div>
    )
}

export default MainLayout;