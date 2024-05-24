import Nav from '../nav';
import './index.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <>
            <Nav />
            <span className={ 'about' }>
                Hey! My name is Erin. I recently graduated with a bachelors degree in Computer Science from the University of North Carolina at Greensboro.
                I have many passions in life (not limited to, but, most certainly including my cats) but, most recently, Game Development
                has taken me by storm! Currently, I'm working on a game project in VR for a Virtual Fashion Show and I have plans for some personal projects that I expect
                to finish this year!
                <br/><br/>
                However, most of my experience lies in UI/UX design and Fullstack Development. In that area I have 8 years of professional and unprofessional
                experience as a junior developer and researcher. Some of my most notable projects include FirstModulAR, ArtBindr, and CardMe.
                Feel free to explore my portfolio to see some of my work. If you'd like to collaborate or just chat,
                you can reach me at <a href={ 'mailto:erinjamieargo@gmail.com' }> erinjamieargo@gmail.com </a> or connect with me on
                <a href={ 'https://www.linkedin.com/in/erin-argo-9b4052281/' }> LinkedIn</a>. Additionally, I have a public repository of most of my work that
                anyone can reach on <a href={ 'https://www.github.com/erinargo' }>Github</a>.

                <br/> <br/>
                Warm regards,
                <br/>
                Erin
            </span>
        </>
    );
}

export default About;