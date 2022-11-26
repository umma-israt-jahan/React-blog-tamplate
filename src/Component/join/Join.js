import React, { useRef } from "react";
import './Join.css'

export default function Join(){
    const form=useRef()
    return(
        <>
            <div className="Join" id="Join-us">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className="storke-text"> READY TO</span>
                        <span> LEVEL UP</span>
                    </div>
                    <div>
                        <span> YOUR BODY</span>
                        <span className="storke-text"> WITH US?</span>
                    </div>
                   
                </div>
                <div className="right-j">
                    <form action=" " className="email-container">
                        <input type="email" name="user_email" placeholder="Enter your Email address"/>
                            <button className="btn btn-j">Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}