import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
    const [isRiderSectionHovered, setIsRiderSectionHovered] = useState(false);
    const [isDeveloperSectionHovered, setIsDeveloperSectionHovered] =
        useState(false);
    return (
        <div className="homepage-wrapper">
            <div
                className="rider-section-wrapper"
                style={{
                    width: isRiderSectionHovered
                        ? "100%"
                        : isDeveloperSectionHovered
                        ? "0"
                        : "50%",
                    opacity: isDeveloperSectionHovered ? 0 : 1,
                }}>
                <img
                    src={"/assets/helmet.png"}
                    alt="sam-portfolio-logo"
                    className="helmet-logo"
                />
                <div
                    className="rider-section"
                    onMouseEnter={() => setIsRiderSectionHovered(true)}
                    onMouseLeave={() => setIsRiderSectionHovered(false)}>
                    <h1>Rider</h1>
                    <p>
                        I live for the thrill of speed and the freedom of the
                        open road. As an avid motorcycle enthusiast, I embrace
                        the adrenaline and adventure of every ride. Join me in
                        experiencing the exhilaration of fast motorcycles and
                        the passion that drives us forward.
                    </p>
                </div>
                <img
                    src="/assets/bike.png"
                    alt="sam-portfolio-logo"
                    className="bike-logo"
                    style={{
                        // display: isRiderSectionHovered ? "block" : "none",
                        opacity: isRiderSectionHovered ? 1 : 0,
                        maxWidth: isRiderSectionHovered ? "50%" : "0",
                    }}
                />
            </div>
            <div
                className="developer-section-wrapper"
                style={{
                    width: isDeveloperSectionHovered
                        ? "100%"
                        : isRiderSectionHovered
                        ? "0"
                        : "50%",

                    opacity: isRiderSectionHovered ? 0 : 1,
                }}>
                <img
                    src="/assets/sam.png"
                    alt="sam-portfolio-logo"
                    className="sam-logo"
                />
                <img
                    src="/assets/laptop.png"
                    alt="sam-portfolio-logo"
                    className="laptop-logo"
                    style={{
                        // display: isRiderSectionHovered ? "block" : "none",
                        opacity: isDeveloperSectionHovered ? 1 : 0,
                        maxWidth: isDeveloperSectionHovered ? "50%" : "0",
                    }}
                />
                <div
                    className="developer-section"
                    onMouseEnter={() => setIsDeveloperSectionHovered(true)}
                    onMouseLeave={() => setIsDeveloperSectionHovered(false)}>
                    <h1>Developer</h1>
                    <p>
                        As a dedicated frontend developer, I specialize in
                        creating stunning and interactive user interfaces. My
                        expertise in HTML, CSS, and JavaScript allows me to
                        transform ideas into amazing web experiences. Explore my
                        portfolio to see how my passion for coding brings
                        innovative solutions to life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
