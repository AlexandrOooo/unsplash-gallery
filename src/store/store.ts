import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./slices/gallery/slice";
import { useDispatch } from "react-redux/es/exports";

export const store = configureStore({
    reducer: {
        gallery: gallerySlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
