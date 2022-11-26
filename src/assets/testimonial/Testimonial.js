import React, { useState } from "react";
import './Testimonial.css'
import { testimonialsData } from '../../Data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

export default function Testimonials(){
    const [selected,setSelected]=useState(0);
    const tLength =testimonialsData.Length;
    return(
        <>
        <div className="Testimonial">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="storke-text">What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color:"orange"}}>
                        {testimonialsData[selected].name}
                    </span> {"  "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img onClick={()=>{
                        selected===0
                        ? setSelected(tLength -1)
                        : setSelected((prev)=> prev -1)
                    }}
                    src={leftArrow} alt=""/>
                    <img 
                    onClick={()=>{
                       selected===tLength -1
                        ? setSelected(0) 
                       : setSelected((prev)=>prev +1)
                    }}
                    src={rightArrow} alt=""/>
                </div>
                {/* <span></span>
                <span></span> */}
            </div>
        </div>
        </>
    )
}