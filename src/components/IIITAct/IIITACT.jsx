import React from 'react';
// import { Document,Page } from 'react-pdf'
import { Document, Page } from '@react-pdf/renderer';
import MyPdf from '../../pdfs/IIIT-BHUBANESWAR-ACT-2013.pdf';
import PDFViewer from './Pdf';

function IIITACT() {
  const pdfUrl =
    'https://drive.google.com/file/d/15-Dyj86u_VfzH6sYXpICN-w1mpKCyJCC/preview';
  const title = 'Google Docs PDF';

  return (
    <div>
    <div>
              <iframe src={MyPdf} title="Google Docs PDF" className="pdf-iframe h-screen w-screen" />

    </div>
    </div>
  );
}

export default IIITACT;
