import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPacienteById } from "../../services/pacienteService";

export function PacientesDetail() {
    const { id } = useParams();

    const [paciente, setPaciente] = useState();

    useEffect(() => {
        getPacienteById(id).then(res => setPaciente(res.data));
    }, [id]);

    if (!paciente) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <h2>Paciente {paciente.nome}</h2>
            <p><strong>Nome: </strong> {paciente.nome}</p>
            <p><strong>CPF: </strong> {paciente.cpf} </p>
            <p><strong>Telefone: </strong> {paciente.telefone} </p>
            <p><strong>Data de Nascimento: </strong> {paciente.dataNascimento}</p>


            <Link to={`/pacientes/editar/${paciente.id}`}>Editar</Link> |{' '}
            <Link to="/pacientes">Voltar</Link>
        </div>
    )


}