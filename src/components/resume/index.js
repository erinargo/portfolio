import Nav from '../nav'
import './index.scss'
import { Document, Page, pdfjs } from "react-pdf";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <>
            <Nav />
            <div className={'doc-wrapper'}>
                <object data="https://www.dropbox.com/scl/fi/m48mv0hgpoyzze0g9xxeo/Erin-Resume.pdf?rlkey=cesrx892smokt42ozruz1plus&st=lfodj4ly&dl=1" type="application/pdf">
                </object>
            </div>

            <a href={'https://www.dropbox.com/scl/fi/m48mv0hgpoyzze0g9xxeo/Erin-Resume.pdf?rlkey=cesrx892smokt42ozruz1plus&st=lfodj4ly&dl=1'}>
                <FontAwesomeIcon className={'download'} icon={faDownload}></FontAwesomeIcon>
            </a> 
        </>
    );
}

export default Resume;