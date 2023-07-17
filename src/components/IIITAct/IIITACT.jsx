import React from 'react';
// import { Document,Page } from 'react-pdf'
import { Document, Page } from '@react-pdf/renderer';
import MyPdf from '../../pdfs/IIIT-BHUBANESWAR-ACT-2013.pdf';

function IIITACT() {
  return (
    <div>
      <div>hey why the fuck is it not renedering</div>
      <Document file={MyPdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default IIITACT;
