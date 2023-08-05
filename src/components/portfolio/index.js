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
                        <iframe src={ '/' } />
                    </a>
                    <a href={ 'https://github.com/erinargo/C-Card-Game---War' }>
                        C++ Card Game - War
                        GitHub does not allow iFrames! Click Me!
                    </a>
                    <a href={ 'https://github.com/erinargo/CSC471' }>
                        CSC 471
                        GitHub does not allow iFrames! Click Me!
                    </a>
                    <a href={ 'https://github.com/erinargo/OnlyPets' }>
                        OnlyPets
                        GitHub does not allow iFrames! Click Me!
                    </a>
                </div>
            </span>
        </>
    );
}

export default Portfolio;
