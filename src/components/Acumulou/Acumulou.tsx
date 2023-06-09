import { Texto } from "./AcumulouElements";

interface AcumulouProps {
    isAcumulado: boolean
}

export default function Acumulou(props: AcumulouProps) {

    function gerarTexto(): string {

        return props.isAcumulado ? "ACUMULOU!" : "Não Acumulado"
    }

    return (
        <Texto>{gerarTexto()}</Texto>
    )
}