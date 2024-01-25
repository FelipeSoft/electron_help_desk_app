import { Check, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const Index = () => {
    return (
        <main className="text-white">
            <header className="w-screen bg-blue-500">
                <div className="max-w-5xl mx-auto h-24 flex flex-row-reverse items-center justify-between">
                    <div>
                        <div className="flex items-center justify-center gap-2">
                            <div>
                                <span className="text-sm">Finalizados: 1/4</span>
                            </div>
                            <button className="h-10 w-10 rounded-full bg-blue-400 border border-blue-300 text-white flex items-center justify-center"><ChevronLeft /></button>
                            <button className="h-10 w-10 rounded-full bg-blue-400 border border-blue-300 text-white flex items-center justify-center"><ChevronRight /></button>
                        </div>
                    </div>
                    <button className="cursor-pointer flex items-center gap-2 text-xl font-semibold">
                        <div className="h-10 w-10 rounded-full bg-blue-400"></div>
                        TH Soluções
                    </button>
                </div>
            </header>
            <section className="w-screen min-h-screen bg-gray-200">
                <div className="max-w-5xl mx-auto grid grid-cols-3 pt-8 gap-12">
                    <article className="w-full">
                        <h1 className="text-black font-semibold text-sm mb-4">ABERTOS</h1>
                        <div className="flex flex-col w-full gap-4">
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-blue-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-blue-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-blue-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-blue-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-blue-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-blue-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </article>
                    <article className="w-full">
                        <h1 className="text-black font-semibold text-sm mb-4">EM ANDAMENTO</h1>
                        <div className="flex flex-col w-full gap-4">
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-green-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-green-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-green-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-green-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </article>
                    <article className="w-full">
                        <h1 className="text-black font-semibold text-sm mb-4">SUSPENSOS</h1>
                        <div className="flex flex-col w-full gap-4">
                            <Link href="" className="h-24 rounded-md transition-all hover:-translate-x-1 hover:shadow-xl bg-white p-2 flex items-center justify-between">
                                <div className="h-full w-1 bg-yellow-500 rounded-xl"></div>
                                <div className="flex items-center h-full w-full ml-2">
                                    <CheckCircle className="text-yellow-600 w-12 h-12 mr-4" />
                                    <div>
                                        <h1 className="text-black font-semibold">Título do Chamado</h1>
                                        <p className="text-gray-500">Aqui ficará informaremos a descrição do chamado.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
            <nav className="fixed bottom-0 right-0 left-0 h-32 bg-blue-500">
                <div className="max-w-5xl mx-auto flex items-center justify-between h-full">
                    <button className="rounded-md bg-blue-400 text-white py-3 px-6 hover:shadow-xl transition-all hover:bg-blue-600">Novo Chamado</button>
                </div>
            </nav>
        </main>
    )
}

export default Index