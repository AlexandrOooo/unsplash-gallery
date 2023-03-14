import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import cl from "./Home.module.scss";

const Home: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.gallery);
    return (
        <div className="wrapper">
            <ul className={cl.list}>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={`image/${item.id}`} state={item.urls.raw}>
                                <img src={item.urls.thumb} alt="" />
                                <p>
                                    {item.user.first_name +
                                        " " +
                                        item.user.last_name}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;
