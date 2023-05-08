import { ThemeProvider } from "styled-components";
import { useResultado } from "../../hooks";
import { quina as QuinaTheme } from "../../styles/theme";
import Principal from "../../components/Principal/Principal";
import Carregando from "../../components/Carregando/Carregando";
import Logo from "../../assets/trevo-quina.png"

export default function Quina() {

    const { quina } = useResultado()

    function isCarregado() {
        return !!quina.numeroDoConcurso;
    }

    function renderElementos() {

        return (
            <ThemeProvider theme={QuinaTheme}>
                <Principal resultado={quina} logo={Logo}/>
            </ThemeProvider>
        )
    }

    function renderCarregando() {

        return (
            <Carregando isCarregando={isCarregado()}/>
        )
    }

    return (
        <>
            {isCarregado() ? renderElementos() : renderCarregando()}
        </>
    )
}