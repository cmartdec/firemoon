import axios from 'axios'
axios.defaults.withCredentials = true


const api = axios.create({
    baseURL: 'http://localhost:5000/'
});

export const login = async({ email, password }) => {
        const { data } = await api.post("/api/user/login", { email, password });
        return data;
};

export const me = async() => {
    const { data } = await api.get("/api/user/me", {withCredentials: true});
    return data;
}

