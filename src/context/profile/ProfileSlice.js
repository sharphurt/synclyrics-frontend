import {createSlice} from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
    name: "profile",
    initialState: {
        token: {
            tokenType: "",
            accessToken: "",
            expiresAt: new Date().setHours(new Date().getHours() + 1),
        },
        user: {
            id: "123",
            username: "sharphurt",
            profileImageUrl: "https://sun3-7.userapi.com/s/v1/ig2/-ehfbQegnHVetfDpweKWG9KePKWiDfuN3bUrAEJ88f1dsHnAqA-B0Tyrmy8lVDTOsD7Oifv1T0mKD-8LBWr6ELyN.jpg?quality=95&crop=464,404,1044,1044&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=cfoPnXRFwnS5Pa1AQo0Oq_M6_nXC_PCLG0Ls2HYeP84&cs=200x200"
        }
    },
    reducers: {
        update: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        }
    }
})

export const { update } = ProfileSlice.actions

export default ProfileSlice.reducer
