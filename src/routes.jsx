import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PacienteForm from './pages/Pacientes/PacientesForm';
import PacientesList from './pages/Pacientes/PacientesList';

export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/pacientes" element={<PacientesList />} />
                <Route path="/pacientes/novo" element={<PacienteForm />} />
                <Route path="/pacientes/editar/:id" element={<PacienteForm />} />

                {/* <Route path="/medicos" element={<MedicoList />} />
                <Route path="/medicos/novo" element={<MedicoForm />} />
                <Route path="/medicos/editar/:id" element={<MedicoForm />} /> */}

                {/* <Route path="/consultas" element={<ConsultaList />} />
                <Route path="/consultas/novo" element={<ConsultaForm />} />
                <Route path="/consultas/editar/:id" element={<ConsultaForm />} /> */}
            </Routes>
        </Router>
    );
}