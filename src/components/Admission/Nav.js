import React, { useState } from 'react'
import img from '../../img/icons8-down-button-50.png'
export default function Nav() {
    const [show, setShow]=useState(false)
  return (
    <div>
      <div className={`h-[50px] w-[50px] fixed top-[200px] right-0 cursor-pointer text-xl transition-all duration-300 ${show?'rotate-180':''}`} style={{backgroundImage:`url(${img})`}} onClick={()=>setShow(!show)}>      </div>


        {
            show && <div className='h-auto w-[300px] fixed top-[250px] right-0 bg-green-200 text-center rounded-xl flex justify-center items-center font-poppins'>
                <ul className='w-full'>
                    <a href='#btech'><li className='h-1/3 rounded-xl hover:bg-white/70'> B.Tech</li></a>
                    <a href='#mtech'><li className='h-1/3 rounded-xl hover:bg-white/70'> M.Tech</li></a>
                    <a href='#phd'><li className='h-1/3 rounded-xl hover:bg-white/70'> PHD</li></a>
                    


                </ul>

            </div>
        }

    </div>
  )
}
