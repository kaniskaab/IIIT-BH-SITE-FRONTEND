import React from 'react';
// import { Document,Page } from 'react-pdf'
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function IIITACT() {
  const pdfUrl =
    'https://drive.google.com/file/d/1_8EQ7sr0zvG744eXMgzX0fNkO2MHXqaB/preview';
  const title = 'Google Docs PDF';
  const HeroTxt = 'IIIT ACT';
  const para = '';

  return (
    <div>
      <div className="md:pt-48 pt-28">
        <div className="flex flex-col items-center justify-center">
          <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
          <div className="flex  justify-center items-center mb-4">
            <iframe
              src={pdfUrl}
              title="Google Docs PDF"
              className="pdf-iframe h-[80vh] w-[80vw]"
              height="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IIITACT;
