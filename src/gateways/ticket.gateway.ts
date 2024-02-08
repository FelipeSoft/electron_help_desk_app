import axios, { AxiosInstance } from "axios";

class TicketGateway 
{
    private instance: AxiosInstance;

    public constructor () {
        this.instance = axios.create({
            baseURL: "http://localhost:8410",
            withCredentials: true
        });
    }

    public async open(input: InputOpenTicket): Promise<void> {
        await this.instance.post("/resources/ticket/open", input)
    }
}

export type InputOpenTicket = {
    title: string;
    description: string;
}

export default TicketGateway;