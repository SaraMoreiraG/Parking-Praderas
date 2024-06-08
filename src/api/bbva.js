import axios from 'axios';
import qs from 'qs';

const CLIENT_ID = process.env.REACT_APP_MERCHANT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SECRET_KEY;
const TOKEN_URL = 'https://connect.bbva.com/token';
const API_URL = 'https://apis.bbvabancomer.com/loans-auto-sbx/v1'; // Reemplaza con la URL de la API que necesites

export const getAccessToken = async () => {
  const credentials = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const encodedCredentials = btoa(credentials); // Codifica las credenciales en base64

  const data = qs.stringify({
    'grant_type': 'client_credentials'
  });

  const config = {
    method: 'post',
    url: TOKEN_URL,
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  try {
    const response = await axios(config);
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining access token:', error);
    throw error;
  }
};

export const fetchMerchantInfo = async (accessToken) => {
  const config = {
    method: 'get',
    url: API_URL,
    headers: {
      'Authorization': `jwt ${accessToken}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching merchant info:', error);
    throw error;
  }
};

