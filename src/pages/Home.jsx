import MedicoCard from "../components/MedicoCard";
import PacienteCard from "../components/PacienteCard";
import ConsultasGrid from "../components/ConsultasGrid";
import CardProps from "../components/CardProps";


export default function Home() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "1000px" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div style={{ margin: "10px" }}>
                        <CardProps
                            title="Agende sua Consulta"
                            subtitle="Cuide da sua saúde"
                            secondary="Agende consultas de forma rápida e previna doenças."
                            imageCard="src/assets/clinimais-consulta.webp"
                            action="Agendar Consulta"
                            to="/consultas/novo"
                        />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <CardProps
                            title="Cadastre um Médico"
                            subtitle="Profissionais qualificados"
                            secondary="Adicione médicos à equipe e amplie o atendimento."
                            imageCard="src/assets/clinimais-medicos.avif"
                            action="Cadastrar Médico"
                            to="/medicos/novo"
                        />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <CardProps
                            title="Cadastre um Paciente"
                            subtitle="Acolhimento e cuidado"
                            secondary="Registre novos pacientes e acompanhe o histórico."
                            imageCard="src/assets/clinimais-paciente.jpg"
                            action="Cadastrar Paciente"
                            to="/pacientes/novo"
                        />
                    </div>
                </div>
                <br />
                <ConsultasGrid />
            </div >
        </div>
    )
}