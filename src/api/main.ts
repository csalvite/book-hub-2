import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export async function get(endpoint = '') {
  try {
    const url = `${VITE_API_URL}${endpoint}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    return error;
  }
}

export async function post(endpoint = '', formBody = '') {
  try {
    const url = `${VITE_API_URL}${endpoint}`;
    const response = await axios.post(url, formBody);

    return response;
  } catch (error) {
    return error;
  }
}
