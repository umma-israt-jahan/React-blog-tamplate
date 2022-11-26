import React from "react";
import './Plans.css'
import {plansData} from '../../Data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export default function Plans(){
    return(
        <>
        <div className="plans-container">
            <div className="programs-header" style={{gap:"2rem"}}>
                <span className="storke-text">READY TO START</span>    
                <span>YOUR JOURNEY</span> 
                <span className="storke-text">NOW WITHUS</span>        
            </div>
            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((features,i)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt=""/>
                                    <span key={i}>{features}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>see more benifits -></span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
                
            </div>
        </div>
        </>
    )
}