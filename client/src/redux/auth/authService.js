import axios from 'axios'


const REGISTER_API_URL = "http://localhost:5000/users/register"
const LOGIN_API_URL = "http://localhost:5000/users/login"


const register = async (userData) => {

    const response = await axios.post(REGISTER_API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(LOGIN_API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
  }

  const authService = {
    register,
    logout,
    login,
  }

  export default authService
