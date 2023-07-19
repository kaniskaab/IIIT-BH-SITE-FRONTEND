import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function FeedbackFacilityForStudent() {
  //Tobe changed later
  const FormUrl1 =
    'https://docs.google.com/forms/d/1nF7W2HpKqLZ4yEqzK9Q-S89JKguKJlX6HPtAFqHuHkY/formrestricted';
  const FormUrl2 =
    'https://docs.google.com/forms/d/1nF7W2HpKqLZ4yEqzK9Q-S89JKguKJlX6HPtAFqHuHkY/formrestricted';
  const FormUrl3 =
    'https://docs.google.com/forms/d/1nF7W2HpKqLZ4yEqzK9Q-S89JKguKJlX6HPtAFqHuHkY/formrestricted';

  const HeroTxt = 'Feedback Facility For Students';

  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="flex flex-col justify-center md:px-4 px-16">
          <a href={FormUrl1} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4 ">
              <div>
                Student feedback regarding the course / subject teacher{' '}
              </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={FormUrl2} target="_blank" className="">
            <div className="py-8 text-xl text-center justify-center flex items-center gap-4">
              <div>Parent’s Feedback regarding the University</div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <a href={FormUrl3} target="_blank" className="">
            <div className="py-8 text-xl text-center flex justify-center items-center gap-4">
              <div>Alumni’s Feedback regarding the University </div>
              <div className="text-orange-500 animationArr">
                <FaAngleDoubleRight />
              </div>
            </div>
          </a>
          <div className="mb-16"></div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackFacilityForStudent;
