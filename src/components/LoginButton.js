import React from 'react';
import {UrlConstants} from "../api/UrlConstants";
import {useCookies} from "react-cookie";

const LoginButton = () => {
    const [cookies, setCookies] = useCookies(["sessionUuid"])

    const handleLogin = () => {
        const uuid = crypto.randomUUID();
        setCookies("sessionUuid", uuid)

        window.location.href = `${UrlConstants.LoginUrl}/${uuid}`
    };

    return <button onClick={handleLogin}>Войти через Spotify</button>;
};

export default LoginButton;