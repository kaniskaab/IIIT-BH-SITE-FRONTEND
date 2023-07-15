import React, { useState, createContext, useEffect } from 'react';
export const Context = createContext();

export default function ContextProvider({ children }) {
  const[notices, setNotices]=useState([]);
  const[tendersData,setTender]=useState([]);
  const[newsAndEventsData, setnewsAndEventsData]=useState([])
  const[research,setResearch]=useState([]);
  const[placement, setPlacement]=useState([]);
  const[testimonials, setTestimonials]=useState([]);
  const[logos,setLogos]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(`${process.env.REACT_APP_BASE_URL}/researchhigh`);
        const data1 = await response1.json();
        console.log('Research High:', data1);
        setResearch(data1);

        const response2 = await fetch(`${process.env.REACT_APP_BASE_URL}/stories`);
        const data2 = await response2.json();
        console.log('Stories:', data2);
        setTestimonials(data2)

        const response3 = await fetch(`${process.env.REACT_APP_BASE_URL}/placehigh`);
        const data3 = await response3.json();
        console.log('Place High:', data3);
        setPlacement(data3);

        const response4 = await fetch(`${process.env.REACT_APP_BASE_URL}/news`);
        const data4 = await response4.json();
        console.log('News:', data4);
        setnewsAndEventsData(data4)

        const response5 = await fetch(`${process.env.REACT_APP_BASE_URL}/tenders`);
        const data5 = await response5.json();
        console.log('Tenders:', data5);
        setTender(data5);

        const response6 = await fetch(`${process.env.REACT_APP_BASE_URL}/notices`);
        const data6 = await response6.json();
        console.log('Notices:', data6);
        setNotices(data6)


        const response7 = await fetch(`${process.env.REACT_APP_BASE_URL}/placement`);
        const data7 = await response7.json();
        console.log('Logos:', data7);
        setLogos(data7)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);




  return <Context.Provider value={{notices,tendersData, newsAndEventsData, research, placement, testimonials,logos}}>{children}</Context.Provider>;
}
