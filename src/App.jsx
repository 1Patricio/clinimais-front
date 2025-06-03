import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Medicos from "./pages/Medicos";
import Consultas from "./pages/Consultas";

function App(){
  return( <BrowserRouter>
    <Routes>
      <Route path="/pacientes" element={<Pacientes />}/>
      <Route path="/medicos" element={<Medicos />}/>
      <Route path="/consultas" element={<Consultas />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;