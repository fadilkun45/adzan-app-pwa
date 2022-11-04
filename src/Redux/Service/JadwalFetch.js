import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:4500/pixiv"

export const jadwalSholatService = createAsyncThunk('/jadwalsholat', async (body, {rejectWithValue}) => {
    try{
        const res = await axios.get()
        return res.data
    }catch(err){
        return rejectWithValue(err.response)
    }
})