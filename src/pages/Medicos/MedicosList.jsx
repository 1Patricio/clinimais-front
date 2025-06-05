import { useEffect, useState } from "react";
import { deleteMedico, getMedicos } from "../../services/medicoService";

export default function MedicoList(){
    const [medicos, setMedico] = useState();

    useEffect(() => {
        getMedicos().then(res => setMedico(res.data));
    }, []);

    const handleDelete = (id) =>{
        deleteMedico(id).then(() => setMedico(medicos.filter(p => p.id !== id)))
    }
}