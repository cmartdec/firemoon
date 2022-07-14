import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/'
});

export const login = async({ email, password }) => {
        const { data } = await api.post("/api/user/login", { email, password });
        return data;
};

