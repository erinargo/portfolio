import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {useEffect} from "react";

const Nav = () => {

    const fireflies = (
        <>
            <div className={'fire'}></div>
            <div className={'fire'}></div>
            <div className={'fire'}></div>
            <div className={'fire'}></div>
            <div className={'fire'}></div>
            <div className={'fire'}></div>
        </>
    );

    const redCircle = <div className={'redCircle'}></div>
    const purpleSquare = <div className={'purpleSquare'}></div>

    const tailRight = "box-shadow: rgba(99, 242, 183, 0.4) 5px 5px,\n" +
        "  rgba(99, 242, 183, 0.3) 10px 10px,\n" +
        "  rgba(99, 242, 183, 0.2) 15px 15px,\n" +
        "  rgba(99, 242, 183, 0.1) 20px 20px,\n" +
        "  rgba(99, 242, 183, 0.05) 25px 25px;"

    const tailDown = "box-shadow: rgba(99, 242, 183, 0.4) -5px 5px,\n" +
        "    rgba(99, 242, 183, 0.3) -10px 10px,\n" +
        "    rgba(99, 242, 183, 0.2) -15px 15px,\n" +
        "    rgba(99, 242, 183, 0.1) -20px 20px,\n" +
        "    rgba(99, 242, 183, 0.05) -25px 25px;"

    const tailLeft = "box-shadow: rgba(99, 242, 183, 0.4) 0px 5px,\n" +
        "  rgba(99, 242, 183, 0.3) 0px 10px,\n" +
        "  rgba(99, 242, 183, 0.2) 0px 15px,\n" +
        "  rgba(99, 242, 183, 0.1) 0px 20px,\n" +
        "  rgba(99, 242, 183, 0.05) 0px 25px;";

    useEffect(() => {
        const clientRect = document.body.getBoundingClientRect();
        const y = clientRect.height;
        const x = clientRect.width;
        document.querySelectorAll('.fire').forEach(el => {
            const randomY = Math.floor(Math.random() * y);
            const randomX = Math.floor(Math.random() * x);

            const randomSize = Math.floor(Math.random() * 4);

            let directions = [tailDown, tailLeft, tailRight];

            el.style = "top: " + randomY + "px!important; left: " + randomX + "px!important; height: "
                + randomSize + "vh; width: " + randomSize + "vh; " + directions[Math.floor(Math.random() * directions.length)];
        })

        document.title = 'Erin Argo | Portfolio';
    })

    return (
        <>
            <nav>
                <section className={ 'logo' }>
                    <h1><a href={'/'}>Erin Argo</a></h1>
                </section>

                <section className={'nav-mid'}>
                    <a href={'/'}>Home</a>
                    <a href={'/about'}> About Me </a>
                    <a href={'/resume'}> Resume </a>
                    <a href={'/portfolio'}> Recent Projects </a>
                </section>

                <section className={'nav-right'}>
                <a href={ 'https://github.com/erinargo' }>
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>

                    <a href={ 'https://www.linkedin.com/in/erin-argo-9b4052281/' }>
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </a>


                    <a href={ 'mailto:erinjamieargo@gmail.com' }>
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </a>
                </section>
            </nav>

            { fireflies }
            { redCircle }
            { purpleSquare }
        </>
    );
}

export default Nav;