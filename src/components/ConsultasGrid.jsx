import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getConsultas } from '../services/consultaService';

export default function ConsultasGrid() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    getConsultas().then(res => setConsultas(res.data));
  }, []);

  const rows = consultas.map((c) => ({
    id: c.id, // id único da consulta
    paciente: c.paciente?.nome || '',
    medico: c.medico?.nome || '',
    data: c.data || '',
    hora: c.hora || '',
    observacoes: c.observacoes || '',
  }));

  const columns = [
    { field: 'paciente', headerName: 'Paciente', width: 200 },
    { field: 'medico', headerName: 'Médico', width: 200 },
    { field: 'data', headerName: 'Data', width: 140 },
    { field: 'hora', headerName: 'Hora', width: 110 },
    { field: 'observacoes', headerName: 'Observações', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}