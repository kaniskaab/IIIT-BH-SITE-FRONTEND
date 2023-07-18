import React from 'react';

const PDFViewer = (props) => {
  const { title, PdfUrl } = props;

  return (
    <div>
      <iframe
        src={PdfUrl}
        title={title}
        className="pdf-iframe h-screen w-screen"
      />
    </div>
  );
};

export default PDFViewer;
