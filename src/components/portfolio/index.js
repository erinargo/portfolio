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
                    <a href={ 'https://www.cardmedaddy.com' }>
                        CardMe
                        <iframe src={ 'https://www.cardmedaddy.com' } />
                    </a>
                    <a href={ 'https://www.artbindr.com' }>
                        ArtBindr
                        <iframe src={ 'https://www.artbindr.com' } />
                    </a>
                    <a href={ 'https://github.com/erinargo/C-Card-Game---War' }>
                        C++ Card Game - War
                        <iframe src={ 'https://github.com/erinargo/C-Card-Game---War' } />
                    </a>
                    <a href={ 'https://github.com/erinargo/CSC471' }>
                        CSC 471
                        <iframe src={ 'https://github.com/erinargo/CSC471' } />
                    </a>
                    <a href={ 'https://github.com/erinargo/OnlyPets' }>
                        OnlyPets
                        <iframe src={ 'https://github.com/erinargo/OnlyPets' } />
                    </a>
                </div>
            </span>
        </>
    );
}

export default Portfolio;