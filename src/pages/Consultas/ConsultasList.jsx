import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteConsulta, getConsultas } from "../../services/consultaService";

export default function ConsultaList(){
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        getConsultas().then(res => setConsultas(res.data));
    }, []);

    const handleDelete = (id) =>{
        deleteConsulta(id).then(() => setConsultas(consultas.filter(p => p.id !== id)))
    }

    return (
        <div>
            <h2>
                Consultas
            </h2>
            <Link to="/consultas/novo">Nova Consulta</Link>
            <ul>
                {consultas.map(p => (
                    <li key={p.id}>
                        {p.paciente?.nome} - {p.medico?.nome}
                        <Link to={`/consultas/${p.id}`}>Detalhes</Link>
                        <Link to={`/consultas/editar/${p.id}`}>Editar</Link>
                        <button type="button" onClick={() => handleDelete(p.id)}>Excluir</button>                    </li>
                ))}
            </ul>
        </div>
    )
}