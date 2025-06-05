import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPaciente, getPacienteById, updatePaciente } from '../../services/pacienteService';

export default function PacienteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', cpf: '', telefone: '', dataNascimento: '' });

  useEffect(() => {
    if (id) getPacienteById(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updatePaciente(id, form) : createPaciente(form);
    action.then(() => navigate('/pacientes'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar' : 'Novo'} Paciente</h2>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
      <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
      <input name="dataNascimento" type="date" value={form.dataNascimento} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}