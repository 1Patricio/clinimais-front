import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMedicoByid } from "../../services/medicoService";

export function MedicoDetail() {
    const { id } = useParams();

    const [medico, setMedico] = useState();

    useEffect(() => {
        getMedicoByid(id).then(res => setMedico(res.data));
    }, [id]);

    if (!medico) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <h2>Médico {medico.nome}</h2>
            <p><strong>Nome: </strong> {medico.nome}</p>
            <p><strong>CRM: </strong> {medico.crm} </p>
            <p><strong>Especialidade: </strong> {medico.especialidade} </p>
            <p><strong>Telefone: </strong> {medico.telefone}</p>


            <Link to={`/medicos/editar/${medico.id}`}>Editar</Link> |{' '}
            <Link to="/medicos">Voltar</Link>
        </div>
    )


}