import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';
import classes from './rti.module.css';

function RTI() {
  const HeroTxt = 'RTI';
  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className=" flex md:flex-row flex-col  w-[80vw]  justify-between mb-16">
          <div className="flex flex-col border-t-8   md:w-[38vw] w-[80vw]">
            <div className=" text-3xl my-2 pb-4 border-b-4 ">
              Suo Moto disclosure under Section 4 of RTI Act, 2005
            </div>
            <div className={`pl-4 ${classes.paddy}`}>
              <ol className="list-decimal">
                <li>
                  Introduction: Please refer to the following documents.
                  <ul className=" list-disc">
                    <li>About the Institute</li>
                  </ul>
                </li>
                <li>
                  Particulars of Organization, Functions and Duties: Please
                  refer to the following documents
                  <ul className=" list-disc">
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                  </ul>
                </li>
                <li>
                  Powers and Duties of Officers and Employees: Please refer to
                  the following documents.
                  <ul className=" list-disc">
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                  </ul>
                </li>
                <li>
                  Rules, Regulations and Instructions used: Please refer to the
                  following documents.
                  <ul className=" list-disc">
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                  </ul>
                </li>
                <li>
                  Mode of Public Participation: Please refer to the following
                  documents
                </li>
                <li>
                  Official Documents and their availability: Please refer to the
                  following documents.
                  <ul className=" list-disc">
                    <li>Official Website</li>
                  </ul>
                </li>
                <li>
                  Boards, Council, Committees and other Bodies: Please refer to
                  the following documents.
                  <ul className=" list-disc">
                    <li>Governing Body</li>
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                  </ul>
                </li>
                <li>
                  Principal Information Officers: Please refer right column in
                  this page.
                </li>

                <li>
                  Directory of Officers and Employee: Please refer to the
                  following Website Link.
                  <ul className=" list-disc">Search Institute Databases</ul>
                </li>
                <li>
                  Procedure followed in Decision Making Process: Please refer to
                  the following documents.
                  <ul className=" list-disc">
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                    <li>Policies</li>
                  </ul>
                </li>
                <li>
                  Pay Structure of Institute Staff: Please refer to the
                  following documents.
                </li>
                <li>
                  The Budget Allocated: Please refer to the following documents.
                </li>
                <li>
                  Subsidy Programmes: Please refer to the following documents.
                  <ul className=" list-disc">GB Scholarship Policies</ul>
                </li>
                <li>
                  Concessions availed by the Institute: Please refer to the
                  following documents
                  <ul className=" list-disc">Not Applicable</ul>
                </li>
                <li>
                  Norms / Standards: Please refer to the following documents.
                  <ul className=" list-disc">
                    <li>Memorandum of Association</li>
                    <li>Rules and regulations</li>
                    <li>Policies</li>
                  </ul>
                </li>
                <li>
                  Information available in Electronic Form: Please refer to the
                  following documents.
                  <ul className=" list-disc">Institute Website</ul>
                </li>
                <li>
                  Obtaining Information: Please refer to the following
                  documents.
                  <ul className=" list-disc">
                    Contact Principal Information Officers As per provisions
                    under RTI Act.
                  </ul>
                </li>
                <li>
                  Other Useful Information: Please refer to the following
                  documents.{' '}
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col border-t-8 md:w-[38vw] w-[80vw] mt-16 md:mt-0">
            <div>
              <div className="text-3xl border-b-4 pt-2 pb-4">
                Principal Information Officers
              </div>
              <div>
                <ul>
                  <li>Public Information Officer</li>
                  <li>Prof. Rakesh Chandra Balabantaray</li>
                  <li>Dean Academics</li>
                  <li>Ph: 2653304</li>
                  <li>email: rakesh@iiit-bh.ac.in</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-3xl border-t-8 mt-8 border-b-4 pt-2 pb-4">
                First Appellate Authority
              </div>
              <div>
                <ul>
                  <li>Shri Manoj Kumar Pattnaik, IAS</li>
                  <li>Director</li>
                  <li>Ph: 2653304</li>
                  <li>email: director@iiit-bh.ac.in</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-3xl  border-t-8 mt-8 border-b-4 pt-2 pb-4">
                Reference Documents
              </div>
              <div>
                <ul className=" list-disc pl-4">
                  <li>Memorandum of Association</li>
                  <li>Rules and Regulations</li>
                  <li>Mandatory Disclosure as per AICTE</li>
                  <li>Telephone List</li>
                  <li>Holiday List</li>
                  <li>Hostel Rules</li>
                  <li>Admission Brochure</li>
                  <li>Faculty Selection Policies</li>
                  <li>Policies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RTI;
