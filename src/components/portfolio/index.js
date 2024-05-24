import Nav from '../nav';
import './index.scss';

const Portfolio = () => {
    return (
        <>
            <Nav />
            <span className={ 'pages-wrapper' }>
                <div className={ 'pages' }>
                    <a href={ '/' }>
                        Portfolio - ReactJS
                        <iframe src={ '/portfolio' } />
                    </a>

                    <a>
                        FirstModulAR
                        <img src={ 'https://www.dropbox.com/scl/fi/7fop0amcjxr54lxtmbhra/fmar.png?rlkey=evrp612iz0j2xgg9l47wsq4cm&st=unee4pwl&dl=1' }  alt={ 'FMAR Core Concept' }/>
                    </a>

                    <a>
                        StyleVeRse
                        <iframe src={ 'https://irlab.uncg.edu:8081/erinargo/vr-fashion-show' } />
                    </a>

                </div>
            </span>
        </>
    );
}

export default Portfolio;
