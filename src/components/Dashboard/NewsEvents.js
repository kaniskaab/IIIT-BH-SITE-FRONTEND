import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const newsAndEventsData = [
    { id: 1, title: 'News 1', link: 'https://example.com/news1' },
    { id: 2, title: 'News 2', link: 'https://example.com/news2' },
    { id: 3, title: 'Event 1', link: 'https://example.com/event1' },
    { id: 4, title: 'Event 2', link: 'https://example.com/event2' },
  ];

  return (
    <div className="flex h-screen justify-center text-green-500">
      {/* News and Events */}
      <div className="text-green-500 text-center">
        {/* Render news and events content */}
        {newsAndEventsData.map((item) => (
          <motion.a
            key={item.id}
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
