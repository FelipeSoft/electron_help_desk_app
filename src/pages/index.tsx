import { Check, CheckCheck, ChevronDown, ChevronLeft, Cog, Eye, Filter, Flag, Goal, HardDrive, LayoutDashboard, Pause, Play, PlusCircle } from "lucide-react"
import Link from "next/link"

const Index = () => {
    return (
        <div className="w-screen flex">
            <aside className="min-h-screen fixed border-r w-1/4 p-8 bg-white flex flex-col justify-between">
                <h1 className="text-2xl font-semibold text-center h-12 flex items-center justify-center"><Link href="/" >TH <span className="text-blue-500 font-bold">Helper</span></Link></h1>
                <ul>
                    <li className="rounded-lg mb-2 cursor-pointer font-semibold py-4 px-8 bg-blue-500 text-white flex items-center gap-4"><LayoutDashboard /><Link className="rounded-lg" href="/">Dashboard</Link></li>
                    <li className="rounded-lg mb-2 cursor-pointer font-semibold py-4 text-gray-500 px-8 hover:bg-gray-200 flex items-center gap-4"><Flag /><Link className="rounded-lg" href="/">Chamados</Link></li>
                    <li className="rounded-lg mb-2 cursor-pointer font-semibold py-4 text-gray-500 px-8 hover:bg-gray-200 flex items-center gap-4"><HardDrive /><Link className="rounded-lg" href="/">Hardware</Link></li>
                    <li className="rounded-lg mb-2 cursor-pointer font-semibold py-4 text-gray-500 px-8 hover:bg-gray-200 flex items-center gap-4"><Cog /><Link className="rounded-lg" href="/">Configurações</Link></li>
                </ul>
                <div className="bg-blue-200 rounded-lg p-8 flex flex-col items-center">
                    <h2 className="text-gray-800 font-semibold text-center">Assistente Virtual</h2>
                    <p className="text-gray-500 text-sm text-center">Conheça o nosso Assistente Virtual</p>
                    <button className="py-4 px-8 rounded-lg font-semibold bg-blue-500 mt-4 text-white transition-all hover:shadow-xl">Quero Ver!</button>
                </div>
            </aside>
            <div className="w-3/4 absolute right-0 overflow-y">
                <header className="bg-white border-b py-8 px-24 text-black flex items-center justify-between gap-8">
                    <h3 className="font-semibold">TH Soluções</h3>
                    <div className="flex items-center gap-4">
                        <button className="rounded-lg font-semibold h-12 px-8 bg-blue-500 text-white transition-all hover:-translate-x-2 hover:shadow-xl flex items-center gap-4"><PlusCircle /> Novo Chamado</button>
                    </div>
                </header>
                <main className="bg-gray-100 h-full py-12 px-24">
                    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="bg-blue-500 text-white h-56 hover:-translate-y-1 transition-all shadow-xl w-full border-4 flex items-center justify-between border-blue-500 rounded-lg p-4">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                                    <Play className="text-blue-500 ml-1" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 w-full mb-1">
                                        <span className="bg-blue-400 text-white rounded-full py-2 px-4">IN: 0</span>
                                        <span className="bg-blue-400 text-white rounded-full py-2 px-4">EX: 1</span>
                                    </div>
                                    <h1 className="text-lg ml-1">Em Atendimento: 1</h1>
                                </div>
                            </div>
                        </Link>
                        <Link href="/" className="bg-blue-500 text-white h-56 hover:-translate-y-1 transition-all shadow-xl w-full border-4 flex items-center justify-between border-blue-500 rounded-lg p-4">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                                    <Pause className="text-blue-500" />
                                </div>
                                <h1 className="text-lg ml-1">Suspendido: 1</h1>
                            </div>
                        </Link>
                        <Link href="/" className="bg-white text-gray-300 h-56 hover:-translate-y-1 transition-all shadow-xl w-full border-4 flex items-center justify-between border-white rounded-lg p-4">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Check className="text-gray-400" />
                                </div>
                                <h1 className="text-lg ml-1 text-gray-400">Conferidos: 0</h1>
                            </div>
                        </Link>
                        <Link href="/" className="bg-white text-gray-300 h-56 hover:-translate-y-1 transition-all shadow-xl w-full border-4 flex items-center justify-between border-white rounded-lg p-4">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Goal className="text-gray-400" />
                                </div>
                                <h1 className="text-lg ml-1 text-gray-400">Finalizados: 0</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full bg-white rounded-lg mt-4 shadow-xl">
                        <div className="flex items-center justify-between h-full rounded-tr-lg rounded-tl-lg w-full bg-blue-100 px-12 py-8">
                            <h1 className="font-semibold text-xl">Avisos</h1>
                            <Link href="/" className="font-semibold text-blue-500 flex items-center"><Eye className="mr-2" />Ver Todos</Link>
                        </div>
                        <section className="flex flex-col p-8 gap-4">
                            <div className="p-4 flex items-center justify-between">
                                <h2 className="text-gray-500">Exibindo <span className="text-blue-500 font-semibold">5</span> resultados</h2>
                                <div className="">
                                    <div className="flex group items-center justify-between rounded-lg border p-4 hover:border-blue-500 transition-all cursor-pointer">
                                        <div className="flex items-center gap-2">
                                            <Filter className="text-blue-500 w-6 h-6" />
                                            <p className="text-blue-500 font-semibold pr-24">Status</p>
                                        </div>
                                        <div className="h-6 w-6 group-hover:mr-10 transition-all rounded-full bg-blue-500 text-white flex items-center justify-center">
                                            <ChevronLeft className="mr-0.5 group-hover:-rotate-90 group-hover:mr-0 group-hover:mt-0.5 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <article className="flex items-center border-b-gray-200 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer justify-between border-b gap-4 hover:rounded-lg p-4">
                                    <div>
                                        <h1 className="text-gray-800 font-semibold text-xl">Felipe</h1>
                                        <p className="text-gray-500">Operador</p>
                                    </div>
                                    <p className="text-gray-500">Agendamento de visita para a data de 12/02.</p>
                                    <CheckCheck className="text-blue-500" />
                                    <button className="text-gray-500 rounded-lg py-2 px-4">Dispensar</button>
                                </article>
                                <article className="flex items-center border-b-gray-200 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer justify-between border-b gap-4 hover:rounded-lg p-4">
                                    <div>
                                        <h1 className="text-gray-800 font-semibold text-xl">Felipe</h1>
                                        <p className="text-gray-500">Operador</p>
                                    </div>
                                    <p className="text-gray-500">Agendamento de visita para a data de 12/02.</p>
                                    <CheckCheck className="text-blue-500" />
                                    <button className="text-gray-500 rounded-lg py-2 px-4">Dispensar</button>
                                </article>
                                <article className="flex items-center border-b-gray-200 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer justify-between border-b gap-4 hover:rounded-lg p-4">
                                    <div>
                                        <h1 className="text-gray-800 font-semibold text-xl">Felipe</h1>
                                        <p className="text-gray-500">Operador</p>
                                    </div>
                                    <p className="text-gray-500">Agendamento de visita para a data de 12/02.</p>
                                    <CheckCheck className="text-blue-500" />
                                    <button className="text-gray-500 rounded-lg py-2 px-4">Dispensar</button>
                                </article>
                                <article className="flex items-center border-b-gray-200 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer justify-between border-b gap-4 hover:rounded-lg p-4">
                                    <div>
                                        <h1 className="text-gray-800 font-semibold text-xl">Felipe</h1>
                                        <p className="text-gray-500">Operador</p>
                                    </div>
                                    <p className="text-gray-500">Agendamento de visita para a data de 12/02.</p>
                                    <CheckCheck className="text-blue-500" />
                                    <button className="text-gray-500 rounded-lg py-2 px-4">Dispensar</button>
                                </article>
                                <article className="flex items-center border-b-gray-200 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer justify-between border-b gap-4 hover:rounded-lg p-4">
                                    <div>
                                        <h1 className="text-gray-800 font-semibold text-xl">Felipe</h1>
                                        <p className="text-gray-500">Operador</p>
                                    </div>
                                    <p className="text-gray-500">Agendamento de visita para a data de 12/02.</p>
                                    <CheckCheck className="text-blue-500" />
                                    <button className="text-gray-500 rounded-lg py-2 px-4">Dispensar</button>
                                </article>
                            </div>
                            <button className="rounded-lg font-semibold h-12 px-4 bg-blue-500 text-white transition-all hover:shadow-xl flex items-center gap-4">Carregar Mais</button>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Index