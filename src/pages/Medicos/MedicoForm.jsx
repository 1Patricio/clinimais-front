import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createMedico, getMedicoByid, updateMedico } from '../../services/medicoService';

export default function MedicoForm() {
  return (
    <>
      <Link to="/medicos" style={{ textDecoration: 'none' }}>
        <ArrowBackIcon
          sx={{
            fontSize: 32,
            color: '#279390',
            margin: '8px 0 0 4px',
            cursor: 'pointer'
          }}
        />
      </Link>
      <Form
      entity="Médico"
      initialState={{ nome: '', crm: '', especialidade: '', telefone: '' }}
      getById={getMedicoByid}
      update={updateMedico}
      create={createMedico}
      redirectTo="/medicos"
      fields={[
        { name: 'nome', label: 'Nome', required: true },
        { name: 'crm', label: 'CRM', required: true },
        { name: 'especialidade', label: 'Especialidade', required: true },
        { name: 'telefone', label: 'Telefone', required: true },
      ]}
    />
    </>
  );
}