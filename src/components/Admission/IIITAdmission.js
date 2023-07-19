import React from 'react';
// import { Document,Page } from 'react-pdf'
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';
import Admission from './Admission';
import AdmissionSection from './AdmissionSection';
import AdmissionSectionM from './AdmissionSectionM';
import AdmissionSectionP from './AdmissionSectionP';
import Nav from './Nav';

function IIITADMISSION() {
 
  const HeroTxt = 'IIIT ADMISSION';
  const para = '';

  return (
    <div>
      <div className="md:pt-48 pt-28">
        <div className="flex flex-col items-center justify-center">
          <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg}/>
          <div className="flex flex-col justify-center items-center mb-4 w-screen overflow-x-clip bg-gray-400/60">
            <div className='w-4/5'>
                 <Admission/>
            <AdmissionSection/>
            <AdmissionSectionM/>
            <AdmissionSectionP/>
            <Nav/> 
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default IIITADMISSION;