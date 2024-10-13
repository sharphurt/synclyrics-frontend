import {createContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";

export const AuthorizationContext = createContext(null)

export const AuthorizationProvider = ({children}) => {
    const [cookies] = useCookies(["sessionUuid", "accessToken", "expiresAt", "userId"])
    const [authorizationContext, setAuthorizationContext] = useState({
        tokenType: "Bearer",
        sessionId: null,
        accessToken: null,
        expiresAt: null,
    })

    useEffect(() => {
        const tokenData = {
            sessionUuid: cookies.sessionUuid,
            tokenType: "Bearer",
            accessToken: cookies.accessToken,
            expiresAt: new Date(cookies.expiresAt)
        }

        setAuthorizationContext(tokenData)
    }, [])

    return <AuthorizationContext.Provider value={authorizationContext}>
        {children}
    </AuthorizationContext.Provider>
}