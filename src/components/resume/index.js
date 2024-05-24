import Nav from '../nav'
import './index.scss'
import resume from './Erin resume.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return (
        <>
            <Nav/>

            <object className="pdf"
                    data={ resume }>
            </object>

            <a href={'https://www.dropbox.com/scl/fi/m48mv0hgpoyzze0g9xxeo/Erin-Resume.pdf?rlkey=cesrx892smokt42ozruz1plus&st=lfodj4ly&dl=1'}>
                <FontAwesomeIcon className={'download'} icon={faDownload}></FontAwesomeIcon>
            </a>
        </>
    );
}

export default Resume;