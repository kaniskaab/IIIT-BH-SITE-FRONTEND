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
      <div>hey why the fuck is it not renedering</div>
      <Document file={MyPdf}>
        <Page pageNumber={1} />
      </Document>
      {/* <Pdf /> */}
      <div className="border-4">
        <PDFViewer title={title} pdfUrl={pdfUrl} />
      </div>
    </div>
  );
}

export default IIITACT;
