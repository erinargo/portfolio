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
                        GitHub doesn't allow for IFrames, please click me <3
                    </a>
                    <a href={ 'https://github.com/erinargo/CSC471' }>
                        CSC 471
                        GitHub doesn't allow for IFrames, please click me <3
                    </a>
                    <a href={ 'https://github.com/erinargo/OnlyPets' }>
                        OnlyPets
                        GitHub doesn't allow for IFrames, please click me <3
                    </a>
                </div>
            </span>
        </>
    );
}

export default Portfolio;
