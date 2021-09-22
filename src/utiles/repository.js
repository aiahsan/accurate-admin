import { api } from './baseUrl';

 
const login = async (data) => {
   return await api.post('/users/login', data);
};
const register = async (data) => {
   return await api.post('/users/register', data);
};
const users = async ( token) => {
  return await api.get('/dashboard',{},{headers:{"Authorization":`Bearer ${token}`}});
};
export const repository = {
 
  login,
  register,
  users
};
