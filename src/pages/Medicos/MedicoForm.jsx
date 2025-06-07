import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createMedico, getMedicoByid, updateMedico } from '../../services/medicoService';

export default function MedicoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', crm: '', especialidade: '', telefone: '' });

  useEffect(() => {
    if (id) getMedicoByid(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updateMedico(id, form) : createMedico(form);
    action.then(() => navigate('/medicos'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar' : 'Novo'} Médico</h2>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="crm" placeholder="CRM" value={form.crm} onChange={handleChange} />
      <input name="especialidade" placeholder="Especialidade" value={form.especialidade} onChange={handleChange} />
      <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}