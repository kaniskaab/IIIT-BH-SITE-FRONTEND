import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function Scstobccell() {
  const HeroTxt = 'SC/ST/OBC Cell';
  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="font-mono md:text-start text-2xl font-bold p-4  md:w-[80vw]">
          SC/ST/OBC Cell
        </div>
        <div className="p-4 md:w-[80vw] md:text-start text-center mb-8">
          The SC/ST/OBC Cell has been constituted by the Institute in
          International Institute of Information Technology Bhubaneswar to
          safeguard the interests of the SC/ST/OBC students and employees of the
          Institute as per the instructions from time to time
        </div>
        <div className="font-mono md:text-start text-lg font-bold p-4  md:w-[80vw]">
          CELL FUNCTION:
        </div>
        <div className=" md:text-start text-center   p-4  md:w-[80vw]">
          <ul className=" list-disc p-4 ">
            <li className="py-2">
              It functions to ensure Equal opportunities, Protection of Right
              and Full Participation.
            </li>
            <li className="py-2">
              As a Grievances Redressal Cell for the grievances of SC/ST/OBC
              students and renders them necessary help in solving their academic
              as well as administrative problems.
            </li>
            <li className="py-2">
              It continuously monitors and evaluates the reservation policies
              and other programs intended for SC/ST/OBCs by the Govt of Odisha
              for their effective implementation at IIIT Bhubaneswar.
            </li>
            <li className="py-2">
              It suggests the follow-up measures to the administration of the
              Institute for achieving the objectives and targets laid down by
              Govt of Odisha for the empowerment of SC/ST/OBCs.
            </li>
          </ul>
        </div>
        <div className=" md:text-start  p-4  md:w-[80vw] ">Contact:</div>
        <div className=" md:text-start  p-4  md:w-[80vw] mb-12">
          <ul>
            <li>Mr. Padmanav Tripathy</li>
            <li>(Liaison Officer, IIIT Bhubaneswar)</li>
            <li>email: padmanav@iiit-bh.ac.in</li>
            <li>Phone: +91 9861069286</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scstobccell;
