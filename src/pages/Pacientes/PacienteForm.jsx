import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PacienteForm() {
  return (
    <>
      <Link to="/pacientes" style={{ textDecoration: 'none' }}>
        <ArrowBackIcon
          sx={{
            fontSize: 32,
            color: '#279390',
            margin: '8px 0 0 4px',
            cursor: 'pointer'
          }}
        />
      </Link>
      <Form entity={"Paciente"} />
    </>
  );
}