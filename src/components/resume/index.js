import Nav from '../nav'
import './index.scss'
import { Document, Page, pdfjs } from "react-pdf";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

    const resumeDownload = () =>
        fetch('Erin resume.pdf').then((res) => {
            res.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Erin Argo Resume.pdf';
                alink.click();
            });
        });

    return (
        <>
            <Nav />
            <div className={'doc-wrapper'}>
                <Document file={ 'https://www.dropbox.com/scl/fi/m48mv0hgpoyzze0g9xxeo/Erin-Resume.pdf?rlkey=cesrx892smokt42ozruz1plus&st=lfodj4ly&dl=1' }>
                    <Page pageIndex={0} />
                    <br/>
                    <Page pageIndex={1} />
                </Document>
            </div>

            <FontAwesomeIcon className={ 'download' } icon={ faDownload } onClick={ resumeDownload }></FontAwesomeIcon>
        </>
    );
}

export default Resume;