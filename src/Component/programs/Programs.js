import React from 'react'
import './Programs.css'
import programsData from '../../Data/programsData'
import RightArrow from '../../assets/rightArrow.png'

export default function Program () {
    return(
        <>
         <div className='programs' id='programs'>
             {/* header */}
             <div className='programs-header'>
                <span className='storke-text'>Explore our</span>
                <span className=''>Programs</span>
                <span className='storke-text'>to shape you</span>
             </div>

             <div className='programs-catagories'>
                {programsData.map((Program)=>(
                <div className='catagory'>
                    {Program.image}
                        <span>{Program.heading}</span>
                        <span>{Program.details}</span>
                    <div className='join-now'><span>Join Now</span>
                        <img src={RightArrow} alt=''/>
                    </div>
                </div>
                ))}

             </div>
         </div>
        </>
    )
}