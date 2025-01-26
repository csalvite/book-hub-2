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

export async function post(endpoint = '', formBody: unknown = {}) {
  try {
    const url = `${VITE_API_URL}${endpoint}`;
    const response = await axios.post(url, formBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}
