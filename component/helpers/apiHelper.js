const Base_Url = 'http://10.0.2.2:3000/api';
import axios from 'axios';

// Auth
export const sendOTP = () => {
  return axios.post(`${Base_Url}/auth`);
};

// user

export const createUser = FormData => {
  return axios.post(`${Base_Url}/user`, FormData);
};
