import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PacienteForm from './pages/Pacientes/PacienteForm';
import PacientesList from './pages/Pacientes/PacientesList';
import { PacientesDetail } from './pages/Pacientes/PacientesDetail';
import MedicoList from './pages/Medicos/MedicosList';
import MedicoForm from './pages/Medicos/MedicoForm';
import { MedicoDetail } from './pages/Medicos/MedicoDetail';
import ConsultaForm from './pages/Consultas/ConsultaForm';
import ConsultaList from './pages/Consultas/ConsultasList';
import Home from './pages/Home';

export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/pacientes" element={<PacientesList />} />
                <Route path="/pacientes/novo" element={<PacienteForm />} />
                <Route path="/pacientes/editar/:id" element={<PacienteForm />} />
                <Route path="/pacientes/:id" element={<PacientesDetail />} />

                <Route path="/medicos" element={<MedicoList />} />
                <Route path="/medicos/novo" element={<MedicoForm />} />
                <Route path="/medicos/editar/:id" element={<MedicoForm />} />
                <Route path="/medicos/:id" element={<MedicoDetail />} />

                <Route path="/consultas" element={<ConsultaList />} />
                <Route path="/consultas/novo" element={<ConsultaForm />} />
                <Route path="/consultas/editar/:id" element={<ConsultaForm />} />

                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    );
}