import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createConsulta, getConsultaById, updateConsulta } from '../../services/consultaService';

export default function ConsultaForm() {
    return (
        <>
            <Link to="/consultas" style={{ textDecoration: 'none' }}>
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
                entity="Consulta"
                initialState={{ paciente: '', medico: '', data: '', hora: '', observacoes: '' }}
                getById={getConsultaById}
                update={updateConsulta}
                create={createConsulta}
                redirectTo="/consultas"
                fields={[
                    { name: 'paciente', label: 'Paciente', required: true, type: 'text' ,slotProps:{ inputLabel: { shrink: true } } },
                    { name: 'medico', label: 'Médico', required: true, type: 'text' },
                    { name: 'data', label: 'Data', required: true, type: 'date' },
                    { name: 'hora', label: 'Hora', required: true, type: 'time' },
                    { name: 'observacoes', label: 'Observações', required: false, type: 'text' },
                ]}
            />
        </>
    );
}