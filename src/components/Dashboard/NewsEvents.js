import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../../context/ContextProvider';

const News = () => {
  const {newsAndEventsData} = useContext(Context)
console.log(newsAndEventsData)
  return (
    <div className="flex h-screen justify-center text-green-500">
      {/* News and Events */}
      <div className="text-green-500 text-center">
        {/* Render news and events content */}
        {newsAndEventsData.map((item) => (
          <motion.a
            key={item._id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer block mb-2 leading-[40px] border-b"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>{item.title}</h4>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default News;
