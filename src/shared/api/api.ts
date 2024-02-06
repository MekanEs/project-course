import axios from 'axios';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localStorage';
export const $api = axios.create({
    baseURL: _API_URL_,
    headers: { Authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) },
});
