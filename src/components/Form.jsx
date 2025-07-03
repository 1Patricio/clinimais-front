import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function Form({
  entity,
  initialState,
  getById,
  update,
  create,
  fields,
  redirectTo
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (id && getById) {
      getById(id).then(res => setForm(res.data));
    }
  }, [id, getById]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? update(id, form) : create(form);
    action.then(() => navigate(redirectTo));
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
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          value={form[field.name]}
          onChange={handleChange}
          required={field.required}
          fullWidth
          type={field.type || "text"}
          slotProps={{
            inputLabel: field.type && field.type !== "text"
              ? { shrink: true }
              : undefined
          }} // Serve para retirar um bug visual quando o tipo do campo não é texto
        />
      ))}
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