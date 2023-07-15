import React, { useContext } from 'react';
import { Context } from '../../context/ContextProvider';

const LogoElement = () => {
  const {logos}=useContext(Context)
  return (
    <div className="w-full bg-gray-200 py-8 h-screen mt-[200px]">
      <div className="container mx-auto">
        <div className="w-full flex justify-center text-[30px] font-bold mb-5">
          Top Companies
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.link}
                alt={logo.name}
                className="h-[100px] w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoElement;
