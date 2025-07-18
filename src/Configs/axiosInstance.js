import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_GOODREADS_BACKEND_URL;

export default instance;