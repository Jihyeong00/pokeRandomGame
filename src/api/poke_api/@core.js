import axios from 'axios';

BackEndURL = process.env.REACT_APP_BACK_END_URL;

export const Axios = axios.create({
    baseURL: BackEndURL,
});
