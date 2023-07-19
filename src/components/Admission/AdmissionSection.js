import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const apiUrl = process.env.REACT_APP_ADMISSION_URL;

const AdmissionSection = ({ type }) => {
  const [notices, setNotices] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const noticesResponse = await fetch(`${apiUrl}/notices`);
      const noticesData = await noticesResponse.json();
      setNotices(noticesData);

      const resourcesResponse = await fetch(`${apiUrl}/resources`);
      const resourcesData = await resourcesResponse.json();
      setResources(resourcesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const btechNotices = notices.filter((notice) => notice.type === 'BTECH');
  const btechResources = resources.filter((resource) => resource.type === 'BTECH');

  return (
    <div className="md:h-screen w-full flex flex-col items-center justify-center text-white font-poppins overflow-y-scroll border" id="btech">
        <h1 className='text-3xl w-full text-center bg-black/60 p-5'>B.Tech Admission</h1>
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {type}
      </motion.h1>
      <AnimatePresence>
      <div className="flex flex-col md:flex-row justify-center mt-8 w-full h-full">
        <motion.div
          className="md:w-1/2 w-full p-4 m-2 shadow-xl rounded-lg flex flex-col border bg-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-4 text-orange-500">BTECH Notices:</h2>
          <ul className='flex flex-col w-full'>
            {btechNotices.map((notice) => (
              <li key={notice._id} className='flex'>
                <h3 className='text-green-500'>{notice.title}</h3>
                {notice.link && (
                  <a href={notice.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 px-2'>
                    {notice.linkPlaceholder}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full p-4 m-2 shadow-xl border rounded-lg bg-white"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold mb-4 text-orange-500">BTECH Resources:</h2>
          <ul className='text-left'>
            {btechResources.map((resource) => (
              <li key={resource._id} className='flex'>
                <h3 className='text-green-500'>{resource.title}</h3>
                {resource.link && (
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 px-2'>
                    {resource.linkPlaceholder}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </AnimatePresence>

     
    </div>
  );
};

export default AdmissionSection;
