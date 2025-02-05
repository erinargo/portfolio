"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogleScholar, faOrcid } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [stars, setStars] = useState([]);

    // Calculate the star positions once when the component mounts
    useEffect(() => {
        let starArray = [];
        const numberOfStars = 200;

        for (let i = 0; i < numberOfStars; i++) {
            let s = Math.random();
            const star = {
                left: Math.random() * 100, // Store position as percentage
                top: Math.random() * 100,
                size: s < 0.5 ? "tiny" : s < 0.8 ? "small" : "medium",
                duration: `${1 + Math.random() * 2}s`,
                delay: `${1 + Math.random() * 2}s`,
                opacity: `${0.3 + Math.random() * 0.5}`,
                originalLeft: Math.random() * 100, // Store original position as percentage
                originalTop: Math.random() * 100,
            };
            starArray.push(star);
        }

        setStars(starArray);
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleMouseMove = (event) => {
        setPosition({
            x: event.pageX,
            y: event.pageY,
        });
    };

    // Function to calculate distance between the cursor and each star
    const calculateDistance = (star) => {
        const cursorX = (position.x / window.innerWidth);
        const cursorY = (position.y / window.innerHeight);
        const starX = star.left;
        const starY = star.top;

        // Euclidean distance formula
        return Math.sqrt(Math.pow(cursorX - starX, 2) + Math.pow(cursorY - starY, 2));
    };

    // Function to move the star away if the cursor is too close
    const moveStarAway = (star) => {
        const distance = calculateDistance(star);
        const minDistance = 50; // Minimum distance to trigger movement (in percentage)

        // If the cursor is within the minimum distance, move the star away
        if (distance < minDistance) {
            const angle = Math.atan2(position.y - window.innerHeight * (star.top / 100), position.x - window.innerWidth * (star.left / 100));
            const newLeft = star.originalLeft + 3 * Math.cos(angle); // Move away from the cursor
            const newTop = star.originalTop + 3 * Math.sin(angle);
            return { left: newLeft, top: newTop };
        }

        // Return to the original position if the cursor is not too close
        return { left: star.originalLeft, top: star.originalTop };
    };

    const spotlight = (
        <div
            className={styles.spotlight}
            style={{
                left: position.x,
                top: position.y,
                position: "absolute",
            }}
        ></div>
    );

    return (
        <div className={styles.page} onMouseMove={handleMouseMove}>
            {stars.map((star, i) => {
                const { left, top } = moveStarAway(star); // Get updated position based on cursor distance

                return (
                    <div
                        key={i}
                        className={`${styles[star.size]}`}
                        style={{
                            position: "absolute",
                            left: `${left}%`, // Apply percentage-based positions
                            top: `${top}%`,
                            animation: `${styles.starTwinkle} ${star.duration} ease-in-out infinite, ${styles.starParallax} ${star.duration} linear infinite`,
                            opacity: star.opacity,
                            width: star.size === "tiny" ? `1.5px` : star.size === "small" ? `1.8px` : `2.5px`,
                            height: star.size === "tiny" ? `1.5px` : star.size === "small" ? `1.8px` : `2.5px`,
                            background: `#fff`,
                            zIndex: -1,
                            borderRadius: `50%`,

                            transition: `0.4s`,
                        }}
                    />
                );
            })}

            {spotlight}

            <header className={styles.header}>
                <a href={ 'https://github.com/erinargo' }> <FontAwesomeIcon icon={faGithub} /> </a>
                <a href={ 'https://www.linkedin.com/in/erin-argo-9b4052281/' }><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={ 'https://orcid.org/0009-0004-3075-8047' }><FontAwesomeIcon icon={faOrcid}/></a>
                <a href={ 'mailto:erinzoenyx@gmail.com' }><FontAwesomeIcon icon={faEnvelope} /></a>
            </header>

            <main className={styles.main}>
                <div className={styles.floatLeft}>
                    <div className={styles.logoName}>
                        <div>Erin Argo</div>
                        <div className={styles.logoStatus}>
                            <a>Researcher</a>
                            <a>Software Engineer</a>
                            <a>Front-End</a>
                            <a>Back-End</a>
                            <a>Game Developer</a>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.skill}>
                                <div className={styles.skillhead}>
                                    <b>Java, C#/.Net, C, C++, PHP, Python, JavaScript, SQL, R</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.floatRight}>
                    <div className={styles.skills}>
                        <h1>Experience</h1>
                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>08/24 - Present</b>
                                <b>Research Assistant</b>
                                <a>Augusta University</a>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>08/23 - 08/24</b>
                                <b>Research Assistant</b>
                                <a>University of North Carolina at Greensboro</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <h1>Projects</h1>
                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2025 - Present</b>
                                <b>Asymmetric Cross-Reality Collaboration - ACCR</b>
                                <span>
                                  <a href={ 'https://github.com/erinargo/Asymmetric-Cross-Reality-Collaboration' }>Github Link</a>
                                  <a>Publication Pending</a>
                                </span>
                            </div>
                            <div className={styles.skillbody}>
                                ACCR is a Mixed Reality Simulation of a collaboration game with the common goal of
                                learning about Environmental Sustainability in Urban Environments. <br/>
                                For ACCR, I acted as the Senior Lead Developer and Researcher and managed a team of five
                                other people, including three researchers and two other developers.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024 - Present</b>
                                <b>FirstModulAR - FMAR</b>
                                <a>Publication Pending</a>
                            </div>
                            <div className={styles.skillbody}>
                                FMAR is a modular Augmented Reality Simulation designed to aid First Responders. <br/>
                                I led the Systematic Literature Review for this project, prepared resources for
                                publication, communicated results at demonstrations and conferences, and assisted in
                                development and designing user studies.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024</b>
                                <b>StyleVeRse</b>
                                <a href={ 'https://github.com/erinargo/stylevr' }>Github Link</a>
                            </div>
                            <div className={styles.skillbody}>
                                StyleVR is a fashion show simulation in Virtual Reality designed for Research. <br/>
                                Developed in collaboration with a colleague to support their research.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024</b>
                                <b>Entities of the Void -- EotV</b>
                                <a href={ 'https://github.com/erinargo/entities-of-the-void' }>Github Link</a>
                            </div>
                            <div className={styles.skillbody}>
                                EotV is a cooperative game about fighting aliens made in Unity. <br/>
                                I was a junior developer on this project in collaboration with two other developers.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <a href={"mailto:erinzoenyx@gmail.com"}>erinzoenyx@gmail.com</a>
            </footer>
        </div>
    );
}
