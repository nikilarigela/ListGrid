import axios from 'axios';
import { BASE_URL, TIMEOUT } from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export const get = (url = '') => instance.get(url);
