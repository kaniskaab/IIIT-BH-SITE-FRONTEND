import React, { useContext, useState }  from 'react'
import { motion, AnimatePresence } from 'framer-motion';
// import tendersData from './tendersData.json';
import { Context } from '../../context/ContextProvider';


export default function Tenders() {
  const {tendersData}=useContext(Context)
  console.log(tendersData);
    const [selectedTender, setSelectedTender] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = (tender) => {
  setSelectedTender(tender);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className='h-screen'>
      <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='font-normal text-green-500 text-[15px] leading-[40px]'
  >
    {/* Render tenders content */}
    {tendersData.map((tender) => (
      <div key={tender.id} onClick={() => handleOpenModal(tender)} className="cursor-pointer mb-2 flex flex-col w-full items-center mx-4 font-poppins border-b">
        <h4>{tender.name}</h4>
        <p>Reference Number: {tender.referenceNumber}</p>
      </div>
    ))}
  </motion.div>
  <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/4 md:right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 md:w-[48%] rounded-lg shadow-lg p-4 flex flex-col items-center h-1/2 leading-5 text-[15px] font-normal" onScroll={handleCloseModal}
          >
             {selectedTender && (
    <>
      <h2 className="mb-4">{selectedTender.name}</h2>
      <p>Reference Number: {selectedTender.referenceNumber}</p>
      <p>Details of Publication in the Print Media: {selectedTender.publicationDetails}</p>
      <p>Date of Publication in the Institute Website: {selectedTender.websitePublicationDate}</p>
      <p>Last Date & Time of Submission of Bids: {selectedTender.submissionLastDate}</p>
      <p>Date & Time of Opening of Bids: {selectedTender.openingBidsDateTime
}</p>
      <p>Date & Time of Opening of Financial Bids: {selectedTender.openingFinancialBidsDateTime}</p>
      {selectedTender.note && <p>Note: {selectedTender.note}</p>}
      {selectedTender.tenderDocumentLink && (
        <a
          href={selectedTender.tenderDocumentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Download Tender Documents
        </a>
      )}
      <button
        onClick={handleCloseModal}
        className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md"
      >
        Close
      </button>
    </>
  )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
