import React from 'react';
// import { Document,Page } from 'react-pdf'
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function BOG() {
  const docUrl =
    'https://docs.google.com/document/d/1K_OHN8poNrYbb3HJHo0vbGQkz7dJsBRz/preview';
  const title = 'Google Docs PDF';
  const HeroTxt = 'BOG';
  const para = '';

  return (
    <div>
      <div className="md:pt-48 pt-28">
        <div className="flex flex-col items-center justify-center">
          <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
          <div className="flex  justify-center items-center mb-4">
            <iframe
              src={docUrl}
              target="_blank"
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

export default BOG;
