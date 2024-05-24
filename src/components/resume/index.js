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

            <a href={'https://cdn.discordapp.com/attachments/384897791291424789/1243654693574545408/Erin_Resume.pdf?ex=66524330&is=6650f1b0&hm=db5171a3b16fe17e37519c6912a5321101df65a4674985c8161e03b919cdd261&'}>
                <FontAwesomeIcon className={'download'} icon={faDownload}></FontAwesomeIcon>
            </a>
        </>
    );
}

export default Resume;