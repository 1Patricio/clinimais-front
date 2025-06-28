import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createMedico, getMedicoByid, updateMedico } from '../../services/medicoService';
import { Typography } from '@mui/material';

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
    <>
      <header>
        <Typography variant="h4" align="center" component="h2" fontWeight="bold">
          Cadastrar Novo Médico
        </Typography>
        <hr style={{ border: 'none', borderTop: '8px solid #20cfcd', margin: '8px auto', width: '10%', borderRadius: '32px' }} />
      </header>
      <section>
        <form onSubmit={handleSubmit} style={{ border: '1px solid', borderRadius: '8px', padding: '32px', marginTop: '48px' }} >
          <h2>{id ? 'Editar' : 'Novo'} Médico</h2>
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
          <input name="crm" placeholder="CRM" value={form.crm} onChange={handleChange} />
          <input name="especialidade" placeholder="Especialidade" value={form.especialidade} onChange={handleChange} />
          <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
          <button type="submit">Salvar</button>
        </form>
      </section>
    </>
  );
}