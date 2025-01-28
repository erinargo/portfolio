"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {

    const [position, setPosition] = useState({x: 0, y: 0});
    const spotlight = (
        <div className={styles.spotlight} style={{
            left: position.x,
            top: position.y,
            position: 'absolute',
        }}></div>
    );

    const handleMouseMove = (event) => {
        setPosition({
            x: event.pageX,
            y: event.pageY
        });
    };

    return (
        <div className={styles.page} onMouseMove={handleMouseMove}>

            { spotlight }

            <header className={styles.header}>
                <div>
                    <a style={{
                        
                    }}>Status</a>
                    <a style={{

                    }}>Projects</a>
                    <a style={{

                    }}>Experience</a>
                </div>

                <div>
                <a>Erin Argo, B.Sc</a>
                    <a>Research Assistant, PhD</a>
                    <a>Augusta GA, United States of America</a>
                    <a href={'mailto:erinzoenyx@gmail.com'}>erinzoenyx@gmail.com</a>
                    <a href={'https://orcid.org/0009-0004-3075-8047'}>ORCiD: 0009-0004-3075-8047</a>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.floatLeft}>
                    <div><img
                        src={'https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg'}
                        alt={'erin-portrait'}/></div>
                    <div className={styles.skills}>
                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>Status</b>
                                <b>Research Assistant at Augusta University, B.Sc in Computer Science</b>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>Skills</b>
                                <b>Java, C#/.Net, C, C++, PHP, Python, JavaScript, SQL, R</b>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>Interests</b>
                                <b>Game Development, Human-Computer Interaction, Fullstack Engineering, Research</b>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>Links</b>
                                <b>Github | ORCiD | LinkedIn | erinzoenyx@gmail.com</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.floatRight}>
                    <div className={styles.skills}>
                        <h1>About</h1>
                        I graduated from The University of North Carolina at Greensboro in 2024 with my Bachelors of
                        Science in Computer Science where, as a student,
                        I worked as a research assistant under Dr. Regis Kopper. Since then, I have been an avid
                        researcher and PhD student of Human-Computer Interaction working under Dr. Jeronimo Grandi at
                        Augusta University in Augusta, Georgia. My active interests are in researching, designing, and
                        developing 3D User-Interfaces. I have eight years of experience in Fullstack Engineering
                        and Game Development with two years of experience as a researcher.
                    </div>
                    <div className={styles.skills}>
                        <h1>Projects</h1>
                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2025 - Present</b>
                                <b>Asymmetric Cross-Reality Collaboration - ACCR</b>
                                <span>
                                  <a>Github Link</a>
                                  <a>Publication Link</a>
                              </span>
                            </div>
                            <div className={styles.skillbody}>
                                ACCR is a Mixed Reality Simulation of a collaboration game with the common goal of
                                learning about Environmental Sustainability in Urban Environments. <br/>
                                For ACCR, I acted as the Senior Lead Developer and Researcher and managed a team of five
                                other people including three researchers and two other developers.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024 - Present</b>
                                <b>FirstModulAR - FMAR</b>
                                <a>Publication Pending</a>
                            </div>
                            <div className={styles.skillbody}>
                                FMAR is a modular Augmented Reality Simulation designed to aid First Responders.<br/>
                                I led the Systematic Literature Review for this project, prepared resources for
                                publication, communicated results at demonstrations and conferences, and assisted in
                                development and designing user studies.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024</b>
                                <b>StyleVeRse</b>
                                <a>Github Link</a>
                            </div>
                            <div className={styles.skillbody}>
                                StyleVR is a fashion show simulation in Virtual Reality designed for Research.<br/>
                                Developed in collaboration with a colleague to support their research.
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <div className={styles.skillhead}>
                                <b>2024</b>
                                <b>Entities of the Void -- EotV</b>
                                <a>Github Link</a>
                            </div>
                            <div className={styles.skillbody}>
                                EotV is a cooperative game about fighting aliens made in Unity.<br/>
                                I was a junior developer on this project in collaboration with two other developers.
                            </div>
                        </div>
                    </div>

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
                </div>
            </main>
            <footer className={styles.footer}>
                <a href={'mailto:erinzoenyx@gmail.com'}>erinzoenyx@gmail.com</a>
            </footer>
        </div>
    )
        ;
}
