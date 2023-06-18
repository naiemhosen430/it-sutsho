

import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
function Main() {
    return(
        <>
            <Menu/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default Main