import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import MyForm from '../../utils/googleForm';
import ImageBox from '../imageBox';

function Grievance() {
  const FormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSdhlCAuA-V87HOrrY6DjuFcqmf-RdG7IJY2hEyYWK94rZ3UIA/viewform?usp=sf_link';
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
