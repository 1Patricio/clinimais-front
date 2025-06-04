import api from "./api";

export const getMedicos = () => api.get(`/medicos`);
export const getMedicoByid = (id) => api.get(`/medicos/${id}`);
export const createMedico = (medico) => api.post(`/medicos`, medico);
export const updateMedico = (id, medico) => api.put(`/medicos/${id}`, medico);
export const deleteMedico = (id) => api.delete(`/medicos/${id}`);