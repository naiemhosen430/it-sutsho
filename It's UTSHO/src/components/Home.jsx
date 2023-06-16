import React from "react";


function Menu () {
    return (
        <>
        <section className="bg-success d-flex justify-content-center py-2 px-4">
            <div className="text-bolder text-light pt-0 fs-3 col-3">It's Utsho</div>
            <ul className="nav col-7">
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
            </ul>
            <div className="col-2">
                <a className="text-light text-bolder border mt-0 d-block px-2 mt-1 bg-secondary rounded py-1 text-center text-decoration-none fs-6" href="/">About Me</a>
            </div>
        </section>
        </>
    )
}

export default Menu