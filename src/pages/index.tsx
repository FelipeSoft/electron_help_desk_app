import MainLayout from "@/app/layouts/MainLayout"
import { Table } from "@/components/Table"
import { Check, Eye, EyeIcon, Goal, Pause, Play } from "lucide-react"
import Link from "next/link"

const Index = () => {
    const chooseTicket = () => {

    }

    return (
        <MainLayout section={0}>
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
                <div className="flex items-center justify-between h-full rounded-tr-lg rounded-tl-lg w-full bg-blue-200 p-8">
                    <h1 className="font-semibold text-xl">Chamados</h1>
                </div>
                <section className="flex flex-col p-8 gap-4">
                    <Table
                        filterables={[{ key: "Status", values: ["Em Andamento", "Suspenso", "Fechado"] }]}
                        selectable={true}
                        callback={chooseTicket}
                        columns={["Nº", "Status", "Descrição", "Operador", "Última Atualização", ""]}
                        data={[
                            { id: "1", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> },
                            { id: "2", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> },
                            { id: "3", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> },
                            { id: "4", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> },
                            { id: "5", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> },
                            { id: "6", status: "Em Andamento", description: "Desenvolvimento do Helpdesk", operator: "Felipe", lastUpdate: "10 minutos", actions: <EyeIcon /> }
                        ]}
                    />
                </section>
            </div>
        </MainLayout>
    )
}

export default Index