import { useEffect, useState } from "react";
import { deletePaciente, getPacientes } from "../../services/pacienteService";
import { Link } from "react-router-dom";

export default function PacientesList() {
    console.log("Opa");

    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getPacientes().then(res => setPacientes(res.data));
    }, []);

    const handleDelete = (id) => {
        console.log(id)
        deletePaciente(id).then(() => setPacientes(pacientes.filter(p => p.id !== id)));
    };

    return (
        <div>
            <h2>
                Pacientes
            </h2>
            <Link to="/pacientes/novo">Novo Paciente</Link>
            <ul>
                {pacientes.map(p => (
                    <li key={p.id}>
                        {p.nome} - {p.cpf}
                        <Link to={`/pacientes/${p.id}`}>Detalhes</Link>
                        <Link to={`/pacientes/editar/${p.id}`}>Editar</Link>
                        <button type="button" onClick={() => handleDelete(p.id)}>Excluir</button>                    </li>
                ))}
            </ul>
        </div>
    )
}