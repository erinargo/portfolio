import Nav from '../nav'
import './index.scss'
import './Erin resume.pdf'
import { Document, Page, pdfjs } from "react-pdf";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <>
            <Nav />
            <div className={'doc-wrapper'}>
                <Document file={ './Erin resume.pdf' }>
                    <Page pageIndex={0} />
                    <br/>
                    <Page pageIndex={1} />
                </Document>
            </div>

            <a href={'https://www.dropbox.com/scl/fi/m48mv0hgpoyzze0g9xxeo/Erin-Resume.pdf?rlkey=cesrx892smokt42ozruz1plus&st=lfodj4ly&dl=1'}>
                <FontAwesomeIcon className={ 'download' } icon={ faDownload }></FontAwesomeIcon>
            </a> 
        </>
    );
}

export default Resume;