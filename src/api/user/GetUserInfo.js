import {UrlConstants} from "../UrlConstants";
import {getImageLink} from "../ApiUtils";

export const getUserInfo = async (accessToken) => {
    if (!accessToken) {
        return null
    }

    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${accessToken}`}
    };

    const response = await fetch(`${UrlConstants.SpotifyUrl}/me`, requestOptions)
    const json = await response.json()
    return convertToState(json)
}

const convertToState = (json) => {
    return {
        id: json.id,
        username: json.display_name ?? json.email,
        profileImageUrl: getImageLink(json.images)
    }
}