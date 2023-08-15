import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [authenticationToken, setAuthenticationToken] = useState(null)

    async function login(username, password) {

        try {
            const response = await executeJwtAuthenticationService(username, password)

            if (response.status === 200) {

                const jwtToken = 'Bearer ' + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setAuthenticationToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setAuthenticationToken(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, authenticationToken }}>
            {children}
        </AuthContext.Provider>
    )
}