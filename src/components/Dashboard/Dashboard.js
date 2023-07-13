
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Notices from './Notices';
import Tenders from './Tenders';
import News from './NewsEvents';
import Background from './Background';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('notices');

  return (
    <>
          <h1 className='text-4xl font-poppins font-bold flex w-full justify-center'>Notices, Tenders and Events</h1>

    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
     className="flex w-screen h-screen rounded-[5px] p-5 mb-10 "
     >
      {/* dashboard */}
        <div  className="w-full md:w-1/2 flex flex-col rounded-[5px]">
      {/* Sidebar */}
      <div className=" bg-[#C8FFD4] flex flex-col rounded-[5px]">
        
        {/* Headers */}
        <div className="flex justify-between p-4">
          <motion.button
            className={`py-2 px-4 text-lg rounded-lg ${selectedTab === 'notices' ? 'bg-[#FF8A00] text-black' : 'bg-[#C8FFD4] text-black'}`}
            onClick={() => setSelectedTab('notices')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Notices
          </motion.button>
          
          <motion.button
            className={`py-2 px-4 text-lg rounded-lg ${selectedTab === 'tenders' ? 'bg-[#FF8A00] text-black' : 'bg-[#C8FFD4] text-black'}`}
            onClick={() => setSelectedTab('tenders')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tenders
          </motion.button>
          
          <motion.button
            className={`py-2 px-4 text-lg rounded-lg ${selectedTab === 'news' ? 'bg-[#FF8A00] text-black' : 'bg-[#C8FFD4] text-black'}`}
            onClick={() => setSelectedTab('news')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            News
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className=" bg-white h-screen p-4 overflow-y-scroll">
        {selectedTab === 'notices' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Notices/>
          </motion.div>
        )}

        {selectedTab === 'tenders' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold"><Tenders/></h3>
          </motion.div>
        )}

        {selectedTab === 'news' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <News/>
          </motion.div>
        )}
      </div>
      </div>
      {/* element for the background */}
      <Background/>
    </motion.div></>
  );
};

export default Dashboard;