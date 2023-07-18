import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import MyForm from '../../utils/googleForm';
import ImageBox from '../imageBox';

function Grievance() {
  const FormUrl = 'https://forms.gle/Umrb4vyezaRWrmDc9';
  const HeroTxt = 'Online Grievance Redressal';

  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="p-4">
          <MyForm formUrl={FormUrl} ht="1400" wd="900" />
        </div>
      </div>
    </div>
  );
}

export default Grievance;
