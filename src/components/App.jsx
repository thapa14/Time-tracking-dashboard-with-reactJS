import React, { useState } from "react";
import Intro from "./intro";
import Routine from "./Routine";
import rawData from "../data.json";
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import study from "../images/icon-study.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";

const App = () => {
    // states 
    const [data, changeData] = useState(rawData);
    const[ timeStamp , changeTimeStamp] = useState('weekly');
    const[ time , changeTime] = useState('week');

    let imagesArray = [work, play, study, exercise, social, selfCare];
    let workColor = 'hsl(15, 100%, 70%)';
    let playColor = 'hsl(195, 74%, 62%)';
    let studyColor = 'hsl(348, 100%, 68%) ';
    let exerciseColor = 'hsl(145, 58%, 55%) ';
    let socialColor = ' hsl(264, 64%, 52%) ';
    let selfCareColor = 'hsl(43, 84%, 65%) ';

    let bg = [ workColor, playColor, studyColor, exerciseColor, socialColor, selfCareColor ];

    data.map((val, index) => {
        return(val.image = imagesArray[index],
        val.color = bg[index])
    })

    const dailyData = () => {
        changeTimeStamp("daily");
        changeTime('day');
    }
    const weeklyData = () => {
        changeTimeStamp("weekly");
        changeTime('week');
    }
    const monthlyData = () => {
        changeTimeStamp("monthly");
        changeTime('month');
    }

    return (
        <>
            <div className="screen d-flex justify-content-center align-items-center">
                <div className="app">
                    <Intro clickDaily={dailyData}
                    clickWeekly={weeklyData}
                    clickMonthly={monthlyData}/>
                    {
                        data.map((curVal, index) => {
                            return (
                                <Routine key={index}
                                bgColor={curVal.color}
                                    image={curVal.image}
                                    workType={curVal.title}
                                    timing={curVal["timeframes"][timeStamp]["current"]}
                                    previousTiming={curVal["timeframes"][timeStamp]["previous"]}
                                    time={time} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App;