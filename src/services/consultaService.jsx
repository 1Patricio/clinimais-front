import api from "./api";

export const getConsultas = () => api.get(`/consultas`);
export const getConsultaById = (id) => api.get(`/consultas/${id}`);
export const createConsulta = (consulta) => api.post(`/consultas`, consulta);
export const updateConsulta = (id, consulta) => api.put(`/consultas/${id}`, consulta);
export const deleteConsulta = (id) => api.delete(`/consultas/${id}`);