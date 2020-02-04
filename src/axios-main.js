import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-abc.firebaseio.com/'
});
export default instance;