import gsap from 'gsap';
import EasePack from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const Director = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const msgRef = useRef(null);
  const msgRef1 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      msgRef.current,
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: EasePack.Power4,
        duration: 1,
        scrollTrigger: {
          trigger: msgRef.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      msgRef1.current,
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: EasePack.Power4,
        duration: 1,
        scrollTrigger: {
          trigger: msgRef1.current,
          start: 'top center',
        },
      }
    );
  }, []);

  return (
    <div className="">
      <div className="py-16 bg-white overflow-hidden">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 pb-12">
              <img
                className=" border-b-2 border-[#cdf8d7] rounded-full bg-gradient-to-b from-[#ffffff25]   to-[#b7ecc335]"
                src="https://iiit-placement-website-v2.vercel.app/tpcell/director.png"
                alt="director"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold font-mono md:text-4xl sm:text-left text-center ">
                Director's Message
              </h2>
              <p
                ref={msgRef1}
                className="mt-6 text-gray-600 sm:text-left text-center"
              >
                The T&P cell promotes the potential of students who are nurtured
                by building employability skills and are developed by a culture
                of engineering, research, and technology in the highly
                competitive academic environment. Students are trained through a
                personalized skill upgrade and technical training program, and
                as a result, they contribute to global core competencies by
                generating rich human capital. The institute would like to
                gratefully recognize the mutually fruitful partnership with our
                previous recruiters. Since its foundation, we have promoted the
                industry association. We want to maintain the same level of
                communication. We'd like to encourage you to visit our campus
                and assess the skill of our students. We look forward to working
                with you in the campus recruitment class of 2022. As a potential
                employer, we are confident that your search for the ideal
                applicant has come to an end.
                <br /> <br />
                Best Regards,
                <br />
                <br />
                <span className="text-lg text-gray-900 font-bold">
                  <span className="text-2xl">Mr. Manoj Pattnayak</span> <br />
                  Director, <br />
                  <span className="text-orange-500">IIIT Bhubaneswar</span>
                </span>
              </p>
              {/* {props.truncate ? <a
                href="/directors_message"
                class="mt-4 inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                Learn more
                <svg
                  class="ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> : <></>} */}
            </div>
          </div>
        </div>
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-32">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 ">
              <img
                className="border rounded-full border-x-[#C8FFD4] border-x-8 px-0   "
                src="https://iiit-placement-website-v2.vercel.app/tpcell/registrar.jpeg"
                // style={{borderRadius: "50%"}}
                alt="director"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="mt-10 text-2xl text-gray-900 font-mono font-bold md:text-4xl sm:text-left text-center">
                Registrar's Message
              </h2>
              <p
                ref={msgRef}
                className="mt-6 text-gray-600 sm:text-left text-center"
              >
                In the first decade of its existence, the Institute had some
                enviable achievements. The construction of the campus, building
                academic infrastructure, recruiting a bunch of young and
                talented faculty are some of these achievements. The Institute
                aims to be a technology playground. This implies fun in
                learning, developing of competitive spirit, developing a sense
                of independence and interdependence. The Institute's curriculum,
                education delivery methods, evaluation standards are being
                constantly fine tuned to achieve the objective of being a
                technology playground.I invite you to visit our campus and
                engage with students who can be your future hires and faculty
                who can show what technology will be like in future.
                <br /> <br />
                Best Regards,
                <br />
                <br />
                <span className="text-lg text-gray-900 font-bold">
                  <span className="text-2xl  ">Dr. Debashish Jena</span> <br />
                  Registrar, <br />
                  <span className="text-orange-500">IIIT Bhubaneswar</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
