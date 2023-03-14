import "./App.css";
import React, { useEffect } from "react";
import { fetchGallery } from "./store/slices/gallery/thunkFetch";
import { useAppDispatch } from "./store/store";
import Home from "component/Home/Home";
import { Route, Routes } from "react-router-dom";
import FullpageImage from "component/FullpageImage/FullpageImage";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGallery());
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="image/:id" element={<FullpageImage />}></Route>
        </Routes>
    );
};

export default App;
