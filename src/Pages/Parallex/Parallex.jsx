import { motion } from 'framer-motion';
import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Director from '../../components/Director/Director';
import Hero from '../../components/Hero/Hero';
import { PlacementStats } from '../../components/PlacementStats/PlacementStats';
import Stats from '../../components/Stats/Stats';
import './styles.css';

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
export const Parallex = (props) => {
  const [openTab, setOpenTab] = React.useState(1);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div className="overflow-x-hidden">
      <header class="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img overflow-hidden">
        <div class=" bg-white bg-opacity-50 rounded-xl h-screen w-screen">
          <Hero />
        </div>
      </header>
      <div class="">
        <p class="mb-4">
          <div>
            <Dashboard />
          </div>
          <div className="w-screen flex">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="director"
                width={props.truncate ? '' : ''}
                // height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About IIIT-Bh
              </h2>
              <p className="mt-6 text-gray-600">
                {props.truncate ? (
                  <>
                    {truncateString(about, 645)}
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
        </p>
      </div>
      <section class="container flex items-center justify-center h-[400px] m-auto mb-12 bg-fixed bg-center bg-cover custom-img"></section>
      <div class="w-screen">
        <p class="">
          <Director />
        </p>
      </div>
      <PlacementStats />
      <Stats />
    </div>
  );
};
