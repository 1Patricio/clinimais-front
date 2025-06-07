import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createConsulta, getConsultaById, updateConsulta } from '../../services/consultaService';
import { getMedicos } from '../../services/medicoService';
import { getPacientes } from '../../services/pacienteService';

export default function ConsultaForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        data: '',
        horario: '',
        pacienteId: '',
        medicoId: '',
        observacoes: ''
    });
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getMedicos().then(res => setMedicos(res.data));
        getPacientes().then(res => setPacientes(res.data));
        if (id) getConsultaById(id).then(res => setForm(res.data));
    }, [id]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = id ? updateConsulta(id, form) : createConsulta(form);
        action.then(() => navigate('/consultas'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Editar' : 'Nova'} Consulta</h2>
            <input
                name="data"
                type="date"
                placeholder="Data"
                value={form.data}
                onChange={handleChange}
            />
            <input
                name="horario"
                type="time"
                placeholder="Horário"
                value={form.horario}
                onChange={handleChange}
            />
            <select
                name="pacienteId"
                value={form.pacienteId}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o paciente</option>
                {pacientes.map(p => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
            </select>
            <select
                name="medicoId"
                value={form.medicoId}
                onChange={handleChange}
                required
            >
                <option value={form.medicoId}>Selecione o médico</option>
                {/* TODO: Adicionar opções adicionais ou lógica extra para seleção de médicos, se necessário */}
                {medicos.map(m => (
                    <option key={m.id} value={m.id}>{m.nome}</option>
                ))}
            </select>
            <textarea
                name="observacoes"
                placeholder="Observações"
                value={form.observacoes}
                onChange={handleChange}
            />
            <button type="submit">Salvar</button>
        </form>
    );
}