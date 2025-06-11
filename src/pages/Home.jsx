import { Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ConsultaCard from "./Consultas/ConsultaCard";
import MedicoCard from "./Medicos/MedicoCard";
import { Margin } from "@mui/icons-material";


export default function Home(){
    return(
        <div style={{ display:"flex"}}>
            <div style={{ margin: "10px" }}>
                <ConsultaCard />
            </div>
            <div style={{margin: "10px"}}>
                <MedicoCard   />    
            </div>
        </div>
        
    )
}