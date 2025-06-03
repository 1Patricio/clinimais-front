import { useEffect, useState } from "react";
import { deletePaciente, getPacientes } from "../../services.jsx/pacienteService";
import { Link } from "react-router-dom";

export default function PacientesList(){
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getPacientes().then(res => setPacientes(res.data));
    }, []);

    const handleDelete = (id) => {
        deletePaciente(id).then(() => setPacientes(pacientes.filter(p => p.id !== id)));
    };

    return(
        <div>
            <h2>
                Pacientes
            </h2>
            <Link to="/pacientes/create">Novo Paciente</Link>
            <ul>
                {pacientes.map(p => (
                    <li key={p.id}>
                        {p.nome} - {p.cpf}
                        <Link to={`/pacientes/editar/${id}`}>Editar </Link>
                        <button onClick={() => handleDelete(p.id)}> Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}