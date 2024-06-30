import React from "react";
import "./AboutPage.css";

function AboutPage(props) {
    return (
        <div className="about-page-wrapper">
            <div className="about-rider-wrapper">
                <h1>About Rider</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, quia, voluptas, tenetur, doloremque, quaerat
                    quisquam, quibusdam.
                </p>
            </div>
            <div className="about-developer-wrapper"></div>
        </div>
    );
}

export default AboutPage;
