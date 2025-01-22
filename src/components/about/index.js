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
                Hi! My name is Erin. I graduated from The University of North Carolina at Greensboro in 2024 with my Bachelors of Science in 
                Computer Science where, as a student, 
                I worked as a research assistant under Dr. Regis Kopper. Since then, I have been an avid researcher and PhD student of 
                Human-Computer Interaction working under Dr. Jeronimo Grandi at Augusta University in Augusta Georgia. 
                My active interest is in researching, designing, and developing 3D User-Interfaces. 
                My current work involves active design in Unity using C\# for Augmented Reality applications.
                <br/><br/>
                Most of my experience lies in UI/UX Design, Game Development, and Fullstack Engineering. In that area I have 8 years of professional and unprofessional
                experience as a junior developer and researcher. Some of my most notable projects include 
                <a href={}>FirstModulAR (FMAR)</a>, 
                <a href={}>Asymmetric Cross-Reality Collaboration (ACCR)</a>, and <a href={}>StyleVeRse (StyleVR)</a>.
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