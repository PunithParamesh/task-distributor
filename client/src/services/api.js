import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const createAgent = (data, token) =>
  API.post('/agents', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const uploadTaskFile = (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  return API.post('/files/upload', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getAgentTasks = (token) =>
  API.get('/agents/tasks', {
    headers: { Authorization: `Bearer ${token}` },
  });


export const getAgents = (token) =>
  API.get('/agents', {
    headers: { Authorization: `Bearer ${token}` },
  });


export const loginAdmin = (data) => API.post('/auth/login', data);
