import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">Debouncing</Link>
            <Link to="/stopCounter">StopCounter</Link>
            <Link to="/postapi">PostAPI</Link>
            <Link to="/parent">Parent</Link>
            <Link to="/child">Child</Link>
            <Link to="/newslist">News List</Link>
            <Link to="dayjs">Dayjs</Link>
        </nav>
    );
}