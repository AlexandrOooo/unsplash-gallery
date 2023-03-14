import { createSlice } from "@reduxjs/toolkit";
import { fetchGallery } from "./thunkFetch";
import { GallerySliceState } from "./types";

const initialState: GallerySliceState = {
    items: [],
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGallery.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});
export default gallerySlice.reducer;
