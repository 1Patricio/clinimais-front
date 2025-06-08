import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div>
            <Link to="/consultas/novo">Nova Consulta</Link>
            <br />
            <Link to="/medicos/novo">Novo Médico</Link>
            <br />
            <Link to="/pacientes/novo">Novo Paciente</Link>
        </div>
    )
}