import React from "react";
import { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Stats = () => {
  const animateText = (elt) => {
    var endNbr = Number(elt.innerHTML);
    incNbrRec(0, endNbr, elt);
  };

  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {
        incNbrRec(i + 1, endNbr, elt);
      }, 30);
    }
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.getElementsByClassName("animate-numbers"),
      onEnter: ()=>{
        for (const elem of arr) {
          animateText(elem);
          console.log(elem);      
        }
      },
    });
    // function with elements passed as parameters for animating the increasing counters
    var arr = document.getElementsByClassName("animate-numbers");
    
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-10 custom-bg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:my-10 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-7xl">
                <span className="animate-numbers" id="number-animate">15</span>+
              </h3>
              <p className="text-2xl mt-4 font-medium">Years in business</p>
              <p className="text-xl mt-0.5">Creating the successful path</p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
              <span className="animate-numbers">6</span>+</h3>
              <p className="text-2xl mt-4 font-medium">Projects delivered</p>
              <p className="text-xl mt-0.5">In last 6 years</p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
              <span className="animate-numbers">150</span>+</h3>
              <p className="text-2xl mt-4 font-medium">Team members</p>
              <p className="text-xl mt-0.5">Working for your success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
