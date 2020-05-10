import { apiKey } from '../types';

const API_ADDRESS = apiKey; // from .env

const callFetch = (address, method, body, headers) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_ADDRESS}${address}`, {
      method: method,
      body: body,
      headers: {...headers}
    })
    .then(res => res.json())
    .then(res => {
      resolve(res);
    })
    .catch(e => {
      reject(e);
    });
  });
};

export const surveyAPIGet = async () => {
  const address = '/api/survey/';
  const headers = {
    'Accept': 'application/json'
  };

  try {
    const res = await callFetch(address, 'GET', null, headers);
    return res;
  } catch (err) {
    return err;
  }
};

export const surveyAPIPost = async (filteredObj) => {

  // console.log(filteredObj);

  const address = '/api/results/';
  const body = filteredObj;
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const res = await callFetch(address, 'POST', JSON.stringify(body), headers);
    return res;
  } catch (err) {
    return err;
  }
};

export const surveyAPIResult = async () => {
  const address = '/api/results/';
  const headers = {
    'Accept': 'application/json'
  };

  try {
    const res = await callFetch(address, 'GET', null, headers);
    return res;
  } catch (err) {
    return err;
  }
};

