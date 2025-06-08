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
        hora: '',
        paciente: '',
        medico: '',
        observacoes: ''
    });
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        getMedicos().then(res => setMedicos(res.data));
        getPacientes().then(res => setPacientes(res.data));
        if (id) {
            getConsultaById(id).then(res => {
                const consulta = res.data;
                setForm({
                    ...consulta,
                    paciente: consulta.paciente?.id || '',
                    medico: consulta.medico?.id || ''
                });
            });
        }
    }, [id]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();
    const consultaPayload = {
        ...form,
        paciente: { id: form.paciente },
        medico: { id: form.medico }
    };
    const action = id
        ? updateConsulta(id, consultaPayload)
        : createConsulta(consultaPayload);
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
                name="hora"
                type="time"
                placeholder="Horário"
                value={form.hora}
                onChange={handleChange}
            />
            <select
                name="paciente"
                value={form.paciente}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o paciente</option>
                {pacientes.map(p => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
            </select>
            <select
                name="medico"
                value={form.medico}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o médico</option>
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