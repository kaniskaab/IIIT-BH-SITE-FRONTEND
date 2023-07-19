import React, { useState, useEffect } from 'react';
// import img from '../svg/Highlight_08.png'
// import img1 from '../svg/Frame.png'
const apiUrl = `${process.env.REACT_APP_ADMISSION_URL}/admission`;

function Admission() {
  const [admissionData, setAdmissionData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data)
      setAdmissionData(data);
    } catch (error) {
      console.error('Error fetching admission data:', error);
    }
  };

  return (
    <div className=" py-8 px-4 font-poppins overflow-x-hidden">
        {/* <div className='h-[50px] w-[50px] bg-no-repeat bg-cover absolute mt-[200px] lg:visible hidden'  style={{backgroundImage:`url(${img1})`}}></div> */}
      <h1 className="text-4xl font-bold text-center mb-8">Admission</h1>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {admissionData.map((program) => (
            <div key={program._id} className="rounded-lg p-4 shadow-lg text-black bg-white">
              <h2 className="text-2xl font-bold mb-4 text-orange-500">{program.type}</h2>
              <h3 className="text-lg font-semibold mb-2 text-green-500">Programmes</h3>
              <ul className="list-disc list-inside mb-4 flex flex-col items-start text-left">
                {program.programme.map((prog) => (
                  <li key={prog}>{prog}</li>
                ))}
              </ul>
              {
            program.reservations.length>0 &&<h3 className="text-lg font-semibold mb-2 text-green-500">Reservations</h3>

              }
              <ul className="list-disc list-inside mb-4 flex flex-col items-start text-left">
                {program.reservations.map((reservation) => (
                  <li key={reservation}>{reservation}</li>
                ))}
              </ul>
              {program.basisOfSelection.length>0 &&               <h3 className="text-lg font-semibold mb-2 text-green-500">Basis of Selection</h3>
}
              <ul className="list-disc list-inside mb-4 flex flex-col items-start text-left">
                {program.basisOfSelection.map((basis) => (
                  <li key={basis}>{basis}</li>
                ))}
              </ul>
              {program.counsellingProcess.length>0 &&               <h3 className="text-lg font-semibold mb-2 text-green-500">Counselling Process</h3>
}
              <ul className="list-disc list-inside mb-4 flex flex-col items-start text-left">
                {program.counsellingProcess.map((process) => (
                  <li key={process}>{process}</li>
                ))}
              </ul>
              {program.financialAssistance.length>0 &&               <h3 className="text-lg font-semibold mb-2 text-green-500">Financial Assistance</h3>
}
              <ul className="list-disc list-inside flex flex-col items-start text-left">
                {program.financialAssistance.length > 0 ? (
                  program.financialAssistance.map((assistance) => (
                    <li key={assistance}>{assistance}</li>
                  ))
                ) : (
                  <></>
                )}
              </ul>            </div>
            
          ))}
        </div>
        {/* <div className='h-[50px] w-[100px] bg-no-repeat bg-contain absolute ml-[1000px] -mt-[30px]'  style={{backgroundImage:`url(${img})`}}></div> */}

        
      </div>
    </div>
  );
}

export default Admission;
