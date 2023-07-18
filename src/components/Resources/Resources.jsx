import React from 'react';
import buildingImg from '../../img/buildingsIIIT2.png';
import ImageBox from '../imageBox';

function Resources() {
  const HeroTxt = 'RESOURCES';
  const para = '';
  return (
    <div className="md:pt-48 pt-28">
      <div className="flex flex-col items-center justify-center">
        <ImageBox HeadTxt={HeroTxt} paraTxt={para} bgImg={buildingImg} />
        <div className="flex flex-col w-[80vw]  ">
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              {' '}
              The Campus
            </div>
            <div>
              Our campus is located in Gothapatna in the outskirts of
              Bhubaneswar. It is a compact 23 acres campus which will house
              classrooms, laboratories, library, hostel, faculty living
              quarters, sports facilities, auditorium and more. In the first
              phase of the construction, the academic building and the student
              hostel have been built. The the Second phase of the construction
              which is in progress, Faculty quarters, Hostels for higher
              education and a Guest house are being constructed.
            </div>
          </div>
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              Classrooms
            </div>
            <div>
              <div>
                There are more than 30 classrooms in multiple formats to
                accommodate variety of needs of the programmes. The class rooms
                have state-of-the-art features:
              </div>
              <ul className=" list-disc pl-4">
                <li>
                  Classrooms to accommodate student strength ranging from 25 to
                  180
                </li>
                <li>There is a mix of galleried and flat-floor class rooms</li>
                <li>
                  Class rooms have Network and Internet access, Multimedia
                  Projectors and Audio systems etc.
                </li>
                <li>
                  It is proposed to air-condition the classrooms in near future
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              Laboratories{' '}
            </div>
            <div>
              <div>
                There are numerous Laboratories as required by the curriculum.
                In addition, the Institute has built research oriented
                laboratories with own funding. Some of these labs are:
              </div>
              <ul className=" list-disc pl-4">
                <li>High Performance Computing Lab</li>
                <li>IOS and OSX Lab with Apple Computers</li>
                <li>Data Center Lab and many more</li>
              </ul>
              <div>
                There are also labs funded by Central Government agencies:
              </div>
              <ul className=" list-disc pl-4">
                <li>CLIA lab funded by Department of IT</li>
                <li>
                  Bio-informatics Lab funded by Department of Science and
                  Technology
                </li>
              </ul>
              <div>
                The Institute has developed Virtual Labs and Cloud based Labs
                for many IT oriented subjects.
              </div>
            </div>
          </div>

          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              Central Library
            </div>
            <div>
              <div>
                The Central Library is a key academic infrastructure of the
                Institute. It is a bookworm's paradise with large and diverse
                collection of books. The Library{' '}
              </div>
              <ul className=" list-disc pl-4">
                <li>Large collection of Titles</li>
                <li>Large collection of Journals</li>
                <li>e-Books</li>
                <li>Multimedia content</li>
                <li>24x7 access</li>
                <li>Text Book library</li>
              </ul>
              <a href="/library" target="_blank" className=" text-orange-600">
                Visit the Central Library Website
              </a>
            </div>
          </div>
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              IT Infrastructure{' '}
            </div>
            <div>
              <div>
                The Institute Has a state-of-the-art IT infrastructure on the
                campus. The IT infrastructure is Service oriented.{' '}
              </div>
              <ul className=" list-disc pl-4">
                <li>Campus network touching every corner of the campus</li>
                <li>Fast Internet access</li>
                <li>Servers to support variety of services</li>
                <li>
                  Large software library of development tools, analytical
                  software, simulation software etc
                </li>
                <li>
                  PCs and Notebooks with everyone: faculty, students and staff
                  members
                </li>
              </ul>
              <a
                href="/itservices"
                target="_blank"
                className=" text-orange-600"
              >
                Visit the IT Services Website
              </a>
            </div>
          </div>
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              HPC: High Performance Computing
            </div>
            <div>
              <ul className=" list-disc pl-4">
                <li>
                  The Institute provide high performance computing facility.
                </li>
              </ul>
              <a href="/hcp" target="_blank" className=" text-orange-600">
                Visit the HPC Website
              </a>
            </div>
          </div>
          <div className=" flex flex-col py-8 ">
            <div className="text-3xl border-t-8 border-b-4 pt-2 pb-4 mb-4 font-medium">
              Hostel
            </div>
            <div>
              <div>
                The Institute is planning to build two Hostels initially. These
                hostels will be able to accommodate more than 1200 students. The
                hostels will be have a combination of single, double and triple
                bedded rooms. Features of the Hostel{' '}
              </div>
              <ul className=" list-disc pl-4">
                <li>Rooms with modern design</li>
                <li>Modern WCs</li>
                <li>Washing machines and pressing Irons</li>
                <li>
                  Common room equipped with HD LCD TV, TT, Carrom, Music system
                </li>
                <li>Hostel Library</li>
                <li>Modern and Hygienic Mess</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
