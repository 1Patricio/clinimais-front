import ConsultaCard from "../components/ConsultaCard";
import MedicoCard from "../components/MedicoCard";
import PacienteCard from "../components/PacienteCard";
import RenderComponent from "../components/ConsultasGrid";
import ConsultasGrid from "../components/ConsultasGrid";
import Card from "../components/CardProps";
import CardProps from "../components/CardProps";


export default function Home() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "1000px" }}>
                <div style={{ display: "flex", justifyContent: "space-evelyn" }}>
                    <div style={{ margin: "10px" }}>
                        <ConsultaCard />
                        <CardProps
                            title="Criar Consulta"
                            secondary="Teste"
                            entity="Consulta"
                            imageCard="src/assets/clinimais-paciente.jpg"
                            to="/consultas/novo"
                        />                    </div>
                    <div style={{ margin: "10px" }}>
                        <MedicoCard />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <PacienteCard />
                    </div>
                </div>
                <br />
                <ConsultasGrid />
            </div >
        </div>
    )
}