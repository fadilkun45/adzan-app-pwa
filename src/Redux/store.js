import { configureStore } from "@reduxjs/toolkit";
import JadwalSlice from "./Feature/JadwalSlice";


const store = configureStore({
    reducer: {
        jadwal: JadwalSlice
    }
})

export default store