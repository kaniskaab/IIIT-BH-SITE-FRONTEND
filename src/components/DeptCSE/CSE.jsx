import { motion } from 'framer-motion';
import React from 'react';

import myImg from '../../img/DrAnjMishra.png'; // Import the image
import { fadeIn, textVariant } from '../../utils/motion';
import Accordion from '../Accordion/Accordion';
import ImageSlider from '../imageCrousel/imgCrousel';
import { SliderData } from '../imageCrousel/sliderData';
import { HodData } from './data';

function CSE() {
  const hod = HodData[0]; // 0 for cse.
  const accordHead1 = 'Department Vision';
  const accordHead2 = 'Department Mission';
  const accordHead3 = hod.deptScope.title;
  const paraList = hod.deptMission.map((point, index) => (
    <li className="py-2" key={index}>
      {point}
    </li>
  ));

  const { title, para, courses, para2, research, para3 } = hod.deptScope;
  const scopeContent = (
    <div>
      <p>{para}</p>
      <h3 className="pl-8">Courses:</h3>
      <ul className="pl-12 list-decimal">
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <p>{para2}</p>

      <ul className="pl-12 list-disc ">
        {research.map((area, index) => (
          <li key={index}>{area}</li>
        ))}
      </ul>
      <p>{para3}</p>
    </div>
  );

  return (
    <>
      <div className="lg:p-[90px] sm:p-12 p-0 "></div>
      <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <ImageSlider slides={SliderData} mainTxt={hod.branch} />;
        <div className="bg-[#637457] w-full text-center text-[#fffffe] sm:p-8 p-4 font-semibold  text-sm sm:text-2xl">
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            Message From Head of the Department
          </motion.div>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-12 gap-2">
          <div className="  flex flex-col  sm:w-[25vw] w-[80vw]  mt-8">
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <img className="rounded-3xl" src={myImg} alt="My Image" />
            </motion.div>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="text-center sm:text-base text-orange-600">
                <span className="text-3xl text-gray-900">{hod.name}</span>
                <br />
                {hod.designation}
                <br />
                {hod.branch}
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="  w-[80vw]  text-center sm:text-left sm:w-[50vw] sm:text-base text-sm mt-8 text">
                {hod.aboutPara}
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="   w-[80vw] sm:w-[50vw] mt-2 text-center sm:text-left font-semibold text-base sm:text-xl">
                {hod.name}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 mb-8  ">
          <div className="  md:w-[45vw]">
            <Accordion head={accordHead1} para={hod.deptVision} />
          </div>
          <div className="   md:w-[45vw]">
            <div>
              <Accordion head={accordHead2} para={paraList} />
            </div>
          </div>
        </div>
        <div className="my-4">
          <Accordion head={accordHead3} para={scopeContent} />
        </div>
      </div>
    </>
  );
}

export default CSE;
