import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMedicoByid, updateMedico, createMedico } from '../services/medicoService';
import { Typography } from '@mui/material';

export default function Form({ entity }) {
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: '48px auto',
        padding: 4,
        border: '1px solid #279390',
        borderRadius: 3,
        backgroundColor: '#fff',
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" fontWeight="bold" color="#279390" gutterBottom>
        {id ? `Editar ${entity}` : `Cadastrar ${entity}`}
      </Typography>
      <TextField
        name="nome"
        label="Nome"
        value={form.nome}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="crm"
        label="CRM"
        value={form.crm}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="especialidade"
        label="Especialidade"
        value={form.especialidade}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="telefone"
        label="Telefone"
        value={form.telefone}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{ mt: 2, fontWeight: 'bold', borderRadius: 2 }}
        fullWidth
      >
        Salvar
      </Button>
    </Box>
  );
}