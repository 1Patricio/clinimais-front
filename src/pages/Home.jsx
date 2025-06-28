import ConsultaCard from "../components/ConsultaCard";
import MedicoCard from "../components/MedicoCard";
import PacienteCard from "../components/PacienteCard";
import RenderComponent from "../components/ConsultasGrid";
import ConsultasGrid from "../components/ConsultasGrid";


export default function Home() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "1000px" }}>
                <div style={{ display: "flex", justifyContent: "space-evelyn" }}>
                    <div style={{ margin: "10px" }}>
                        <ConsultaCard />
                    </div>
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