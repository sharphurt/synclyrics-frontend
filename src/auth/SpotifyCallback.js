import React, {useEffect} from 'react';
import {UrlConstants} from "../api/UrlConstants";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const SpotifyCallback = () => {
    const [cookies, setCookies] = useCookies(["sessionUuid", "accessToken", "expiresAt", "userId"])
    const navigate = useNavigate();

    const getSession = async () => {
        const response = await fetch(`${UrlConstants.SessionUrl}/get/${cookies.sessionUuid}`);
        const json = await response.json();

        setCookies("accessToken", json.accessToken)
        setCookies("expiresAt", json.expiresAt)
        setCookies("userId", json.userId)
    }

    useEffect(() => {
        getSession().then(() => navigate("/lyrics"))
    }, []);

    return <div>
        Загрузка...
    </div>;
};

export default SpotifyCallback;