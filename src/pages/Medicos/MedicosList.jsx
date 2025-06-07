import { useEffect, useState } from "react";
import { deleteMedico, getMedicos } from "../../services/medicoService";
import { Link } from "react-router-dom";

export default function MedicoList(){
    const [medicos, setMedico] = useState([]);

    useEffect(() => {
        getMedicos().then(res => setMedico(res.data));
    }, []);

    const handleDelete = (id) =>{
        deleteMedico(id).then(() => setMedico(medicos.filter(p => p.id !== id)))
    }

    return (
        <div>
            <h2>
                Médicos
            </h2>
            <Link to="/medicos/novo">Novo Médico</Link>
            <ul>
                {medicos.map(p => (
                    <li key={p.id}>
                        {p.nome} - {p.cpf}
                        <Link to={`/medicos/${p.id}`}>Detalhes</Link>
                        <Link to={`/medicos/editar/${p.id}`}>Editar</Link>
                        <button type="button" onClick={() => handleDelete(p.id)}>Excluir</button>                    </li>
                ))}
            </ul>
        </div>
    )
}