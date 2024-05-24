import Nav from '../nav';
import './index.scss';

const Landing = () => {

    const me = <div className={'me'}><div /><img src={'https://media.discordapp.net/attachments/384897791291424789/1121898474200387665/20230623_162050-removebg-preview.png'}  alt={'Picture of me'}/></div>

    return (
      <>
          <Nav />
          <span className={'blurb'}>
              <p>Hello</p>
              <h1>My name is Erin</h1>
              <p>Fullstack Developer, Software Engineer, Game Developer</p>
          </span>
          { me }
      </>
    );
}

export default Landing;