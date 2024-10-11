import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {update} from "./PlaybackSlice";
import {ApiUrls} from "../../api/ApiUrls";
import {createStateFromSpotifyData} from "./SpotifyUtil";

export const PlaybackUpdater = () => {
    const dispatch = useDispatch()
    const tokenData = useSelector((state) => state.profile.token)

    const makeRequest = () => {
        const url = ApiUrls.SpotifyBaseUrl + "/me/player"
        const token = tokenData.tokenType + " " + tokenData.accessToken
        const requestOptions = {
            method: 'GET',
            headers: {'Authorization': token}
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                const state = createStateFromSpotifyData(data)
                dispatch(update(state))
            });
    }

    useEffect(() => {
        const interval = setInterval(makeRequest, 300)
        return () => clearInterval(interval)
    }, [dispatch])

    return null
}