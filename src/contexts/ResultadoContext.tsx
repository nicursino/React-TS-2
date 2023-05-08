import { createContext, useState, useEffect } from "react";
import { LoteriasProps, Concurso } from "../types/resultado";
import resultadoService from "../services/ResultadosService";

const ResultadoContext = createContext({} as LoteriasProps);

function ResultadoContextProvider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Concurso);
    const [timemania, setTimemania] = useState({} as Concurso)
    const [quina, setQuina] = useState({} as Concurso)

    async function buscaJogosLoteria() {
        const megasenaResponse = await resultadoService.getUltimoResultadoMegaSena();
        const timemaniaResponse = await resultadoService.getUltimoResultadoTimemania();
        const quinaResponse = await resultadoService.getUltimoResultadoQuina();
    
        setMegasena(megasenaResponse);
        setTimemania(timemaniaResponse);
        setQuina(quinaResponse);
    }

    useEffect(() => {
        buscaJogosLoteria()
    }, []);

    return (
        <ResultadoContext.Provider value={{megasena, timemania, quina}}>
            {children}
        </ResultadoContext.Provider>
    );

}

export {ResultadoContext, ResultadoContextProvider};