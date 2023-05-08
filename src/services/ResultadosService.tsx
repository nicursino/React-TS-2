import { Concurso } from "../types/resultado";
import api from "./api";

const MEGA_SENA = "megasena"
const TIMEMANIA = "timemania"
const QUINA = "quina"

class ResultadosService {
    private async get(tipoJogo: string): Promise<Concurso> {
        const { data } = await api.get("/");
        return data[`${tipoJogo}`];
    }

    async getUltimoResultadoQuina(): Promise<Concurso> {
        return this.get(QUINA);
    }

    async getUltimoResultadoMegaSena(): Promise<Concurso> {
        return this.get(MEGA_SENA);
    }

    async getUltimoResultadoTimemania(): Promise<Concurso> {
        return this.get(TIMEMANIA);
    }
}

const resultadoService = new ResultadosService();
export default resultadoService;