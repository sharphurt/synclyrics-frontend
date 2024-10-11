import { configureStore } from '@reduxjs/toolkit'
import PlaybackReducer from '../context/playback/PlaybackSlice'
import ProfileReducer from "../context/profile/ProfileSlice";

export default configureStore({
    reducer: {
        playback: PlaybackReducer,
        profile: ProfileReducer
    },
})