import React from "react";
import "./intro.css";
import "./intro-mobile.css";
import logo from "../images/image-jeremy.png"

const Intro = (props) => {
    return (
        <>
            <div className="intro">
                <div className="card  main_card border_radius">
                    <div className="about_div border_radius">
                        <img className="rounded-circle logo" src={logo} alt="img" />
                        <div className="about_data_div mt-md-5 pt-md-4 text-white">
                            <p className="my-md-1">Report for</p>
                            <h1 className="name">Jeremy Robson</h1>
                        </div>
                    </div>
                    <div className="time_tracking_links  ">
                            <li className="list"><a className="links" href="#" onClick={()=> { props.clickDaily() }}>Daily</a></li>
                            <li className="list"><a className="links" href="#" onClick={()=> { props.clickWeekly() }}>Weekly</a></li>
                            <li className="list"><a className="links" href="#" onClick={()=> { props.clickMonthly() }}>Monthly</a></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;