import { createSlice } from "@reduxjs/toolkit"
import { jadwalSholatService } from "../Service/JadwalFetch"


const initialState = {
    loading: true,
    res: '',
    error: ''
}

export const JadwalSlice = createSlice({
    name: "jadwalSholat",
    initialState,
    extraReducers(builders){
        builders.addCase(jadwalSholatService.fulfilled, (state, action) => {
            state.loading = false
            state.res = action.payload
        })
        builders.addCase(jadwalSholatService.pending, (state, action) => {
            state.loading = true
        })
        builders.addCase(jadwalSholatService.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    }
})

export default JadwalSlice.reducer