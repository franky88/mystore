import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        console.log('Form submitted!')
        const response = await fetch("http://localhost:8000/api/auth/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value, 'password': e.target.password.value
            })
        })
        const data = await response.json()
        if(response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(to='/')
        } else {
            console.log("Something went wrong!")
        }
    }

    const contextData = {
        user: user,
        loginUser: loginUser
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}