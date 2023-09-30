import React, { useState, useEffect } from "react";
import UserBadge from "./userBadge";


const TimeWidget =()=> {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
        }, 1000);
        return () => clearInterval(timer);
      }, []);


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <UserBadge/>
            <div className="Timer">
                <span style={{fontSize: '3vh'}}>{time}</span>
            </div>
        </div>
    )
}


export default TimeWidget