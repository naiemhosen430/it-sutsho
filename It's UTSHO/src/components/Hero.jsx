import React from "react";
import ServiceBox from "./ServiceBox/ServiceBox";


function Hero () {
    return(
        <>
            <section className="d-flex bg-danger p-4 justify-content-center">
                <div className="col-5">
                    <img className="w-100" src="https://yt3.googleusercontent.com/4ONhYzYtZsFSlf_JGLV8QgjNJOmAqkmyT5-9cD8hZL7R5qIiEdSLqVJn9h3KY_R1UG9effNtRQ=s900-c-k-c0x00ffffff-no-rj" alt="image not found fopund" />
                </div>
                <div className="col-7 p-5">
                    <h4 className=" text-info">Welcome tp my website</h4>
                    <h1 className="text-success">Hello <span className="text-bolder text-light">It's Utsho</span></h1>
                    <h5 className="text-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur labore in libero. Quam omnis voluptates, totam quo enim, assumenda exercitationem fugiat quisquam ullam esse, eligendi odio voluptatum ut sit illum.</h5>
                <div className="d-flex justify-content-center my-5 py-5">
                    <ServiceBox head="Arcitactur" Des="there will be my des" btntext="Click here"/>
                    <ServiceBox head="Arcitactur" Des="there will be my des" btntext="Click here"/>
                    <ServiceBox head="Arcitactur" Des="there will be my des" btntext="Click here"/>
                </div>
                </div>
            </section>
        </>
    )
}

export default Hero