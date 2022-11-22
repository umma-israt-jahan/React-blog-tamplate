import React from 'react'
import './Programs.css'
import {programsData} from '../../'

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
         </div>
        </>
    )
}