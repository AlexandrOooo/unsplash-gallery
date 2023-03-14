import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGallery = createAsyncThunk(
    "gallery/fetchGallery",
    async () => {
        const { data } = await axios.get(
            "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
        );
        console.log(data);
        return data;
    }
);
