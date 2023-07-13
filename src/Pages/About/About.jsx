import { motion } from 'framer-motion';
import React from 'react';
import Director from '../../components/Director/Director';
import bgImg from '../../img/bg-parallex.jpg';
import { textVariant } from '../../utils/motion';

const about = `IIIT Bhubaneswar owes its origins to the initiative of the
Government Odisha. It is a result of the desire of the
Government to establish a world className institute of
Information Technology in the state. The Institute has been
registered as a society in Nov 2006. In January 2014, the
Institute is converted to a University by the Government of
Odisha. There is misconception that IIIT Bhubaneswar is a
Institute promoted in PPP mode by the Government. The Institute
is fully owned by the Government of Odisha. The Information
Technology Department is the controlling Department. The
Government provides funds for the Infrastructure creation.
However, the Institute has to earn its Revenue Expenditure. This
is the model in all State Government promoted IIITs in
Bangalore, Hyderabad and Delhi. The Institute enjoys academic,
financial and administrative autonomy by the powers invested
through the IIIT Bhubaneswar act. IIIT aspires to be a national
Institute in line with its Peer Institutes. The Governance
structure of the Institute is modelled after those of the IITs.
The Governor of the state is the Chancellor of the Institute.
The Board of Governors has members from Odisha Legislative
Assembly, Government of Odisha, Leaders from the IT industry and
Eminent educationists. Currently, the Chairman of the Institute
is the Chief Secretary of the Government of Odisha. The Director
is the Executive Head of the Institute. The Director is assisted
by the Registrar, the Deans, the Controller of examinations and
the Comptroller of finance in day-to-day management of the
Institute The Institute has its focus on quality and rigorous
education, quality resource, academic infrastructure, technology
and innovation. These initiatives have helped IIIT-Bhubaneswar
achieve pre-eminence in India and beyond.`;

const About = (props) => {
  const [openTab, setOpenTab] = React.useState(1);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div>
      <div className="py-16 bg-white pt-48">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 flex flex-col md:flex-row md:gap-6 items-center md-items-start lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <motion.div
                variants={textVariant(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <img
                  className="h-[30vh] w-[70vw] md:w-[50vw] object-cover rounded-full "
                  src={bgImg}
                  alt="director"
                  width={props.truncate ? '' : ''}
                  // height=""
                />
              </motion.div>

              {props.truncate ? (
                <></>
              ) : (
                <div className="w-full bg-white rounded-lg border shadow-md mt-7">
                  <ul
                    role="tablist"
                    className="flex flex-wrap text-sm font-medium text-center custom-bg rounded-t-lg border-b border-gray-200"
                    id="defaultTab"
                  >
                    <li className="mr-2">
                      <a
                        id="vision-tab"
                        className={
                          (openTab === 1 ? 'text-red-700' : 'black') +
                          ' font-semibold inline-block p-4 rounded-tl-lg hover:bg-orange-300'
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        role="tablist"
                        href="#vision"
                      >
                        Vision
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        id="mission-tab"
                        className={
                          (openTab === 2 ? 'text-red-700' : 'black') +
                          ' font-semibold inline-block p-4 hover:text-gray-600 hover:bg-orange-300'
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        role="tablist"
                        href="#mission"
                      >
                        Mission
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        id="values-tab"
                        className={
                          (openTab === 3 ? 'text-red-700' : 'black') +
                          ' font-semibold inline-block p-4 hover:text-gray-600 hover:bg-orange-300'
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(3);
                        }}
                        data-toggle="tab"
                        role="tablist"
                        href="#values"
                      >
                        Values
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-space h-[280px] overflow-y-auto">
                    <div
                      className={
                        (openTab === 1 ? 'block' : 'hidden') +
                        ' p-4 bg-white rounded-lg md:p-8'
                      }
                      id="vision"
                      role="tabpanel"
                      aria-labelledby="vision-tab"
                    >
                      <p className="mb-3 text-gray-500 dark:text-gray-400">
                        Our vision is to be an unique institute imparting
                        education, training, research, and consulting in
                        technology and related fields to develop human resources
                        who will lead the economy and the society in the coming
                        decades.
                      </p>
                    </div>
                    <div
                      className={
                        (openTab === 2 ? 'block' : 'hidden') +
                        ' p-4 bg-white rounded-lg md:p-8'
                      }
                      id="mission"
                      role="tabpanel"
                      aria-labelledby="services-tab"
                    >
                      The mission of IIIT is to be a knowledge seeking
                      Institution of higher learning that will educate students
                      in technology and other disciplines of scholarship. The
                      Institute will work closely with the Industry and other
                      users of the technology to develop and deliver
                      technological solutions to enhance their competitive
                      position. The Institute is committed to the entire value
                      chain of knowledge creation, diffusion and preservation to
                      meet the challenges of the century. The Institute will
                      borrow best practices in education delivery systems,
                      research and consulting practices. Leveraging technology
                      to bring about next generation of practices will be a key
                      to this strategy. The Institute is dedicated to creating a
                      community of students, faculty and scholars with passion
                      for learning, creativity, innovation in all aspects of
                      academic pursuit.
                    </div>
                    <div
                      className={
                        (openTab === 3 ? 'block' : 'hidden') +
                        ' p-4 bg-white rounded-lg md:p-8'
                      }
                      id="values"
                    >
                      The Institute cultivates values of Honesty and
                      transparency, Respect for the Individual, Commitment to
                      quality & high standards, Passion for performance and
                      Sensitivity to social & ethical issues.
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:7/12 lg:w-6/12">
              <motion.div
                variants={textVariant(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="text-center sm:text-start text-2xl text-gray-900 font-bold md:text-4xl">
                  About IIIT-Bh
                </h2>
              </motion.div>

              <p className="mt-6 text-gray-600">
                {props.truncate ? (
                  <>
                    <motion.div
                      variants={textVariant(0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      {truncateString(about, 645)}
                    </motion.div>
                    <br />
                    <a
                      href="/about"
                      class="mt-4 inline-flex items-center font-medium text-orange-600 hover:text-orange-800"
                    >
                      Learn more
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                      >
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
                      </motion.div>
                    </a>
                  </>
                ) : (
                  about
                )}
              </p>
            </div>
          </div>

          {props.truncate ? null : <Director truncate={false} />}
        </div>
      </div>
    </div>
  );
};

export default About;
