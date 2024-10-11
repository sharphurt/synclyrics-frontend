import {createSlice} from '@reduxjs/toolkit'
import PlaybackState from "./PlaybackState";

export const PlaybackSlice = createSlice({
    name: "playback",
    initialState: {
        currentState: PlaybackState.OFFLINE,
        trackData: {
            id: "",
            coverUrl: "",
            trackName: "",
            artist: "",
            album: ""
        },
        progress: 0
    },
    reducers: {
        update: (state, action) => {
            state.currentState = action.payload.currentState
            state.trackData = action.payload.trackData
            state.progress = action.payload.progress
        }
    }
})

export const { update } = PlaybackSlice.actions

export default PlaybackSlice.reducer