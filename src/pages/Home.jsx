import { Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ConsultaCard from "./Consultas/ConsultaCard";


export default function Home(){
    return(
        <div>
            <Link to="/consultas/novo">Nova Consulta</Link>
            <br />
            <Link to="/medicos/novo">Novo Médico</Link>
            <br />
            <Link to="/pacientes/novo">Novo Paciente</Link>
            <ConsultaCard />
        </div>
        
    )
}