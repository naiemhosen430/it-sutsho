import React from "react";
import Menu from "../components/menu";
import { Outlet } from "react-router-dom";
function Main() {
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default Main