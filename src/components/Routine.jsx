import React from "react";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Routine.css";
import "./Routine-mobile.css";
import dots from "../images/icon-ellipsis.svg";
import { PinDropSharp } from "@material-ui/icons";

const Routine = (props) => {
    return (
        <>
            <div style={{
                background: `${props.bgColor} url(${props.image})no-repeat top right`,
                backgroundSize: `5rem 5rem`,
                backgroundPositionX: `15rem`
            }
            } className="card routine">

                <div className="data_card ">
                    <div className="routine_type  text-white mt-md-3">
                        <h5 className="routine_work">{props.workType}</h5>
                        <img className="icons" src={dots} alt="img" />
                    </div>
                    <div className="mobile_responsive">
                    <h1 className="mt-md-4 text-white routine_time">{props.timing}hrs</h1>
                    <p className="my-md-2  routine_previous_time">Last {props.time}- <span>{props.previousTiming}</span>hrs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Routine;