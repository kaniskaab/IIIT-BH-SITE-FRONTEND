import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from '../../context/ContextProvider';
// import notices from './noticesData.json'
const Dashboard = () => {
  // const [notices,setNotices]=useState([])
const {notices}=useContext(Context)
console.log(notices)
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen justify-center">
      {/* Notices */}
      <div className="text-green-500 font-poppins text-center text-[15px] leading-[40px]">
        {/* Render notices content */}
        {notices.map((notice) => (
          <div
            key={notice.id}
            onClick={() => handleOpenModal(notice)}
            className="cursor-pointer mb-2 w-full border-b py-2"
          >
            <h4>{notice.title}</h4>
            <p>{(notice.uploadDate).slice(0,10)}</p>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/4 md:right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 md:w-[48%] h-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center text-[15px]" onScroll={handleCloseModal}
          >
            <h2 className="text-lg font-bold mb-4">{selectedNotice.title}</h2>
            <p>Date of Upload: {(selectedNotice.uploadDate).slice(0,10)}</p>
            <p>Posted By: {selectedNotice.postedBy}</p>
            <p>{selectedNotice.content}</p>
            {selectedNotice.attachment && (
              <a
                href={selectedNotice.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Attachment
              </a>
            )}
            <button
              onClick={handleCloseModal}
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
