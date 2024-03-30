import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

const StateProvider =({ children })=>{

    const[workTime,setWorkTime] = useState(25*60);
    const[shortBreakTime,setShortBreakTime] = useState(5*60);
    const[longBreakTime, setLongBreakTime] = useState(15*60);

    // storing timer's initial value
    const[initTime,setInitTime] = useState(0);
    // tag.jsx
    const [active,setActive] = useState(0);
    // progess.jsx
    const [progress,setProgress] = useState(99);
    // clock state
    const [time,setTime] = useState(100);
    //controlling time with the startStop button
    const[isActive,setIsActive] = useState(false);

    useEffect(()=>{
        switch(active){
            case 0:
                setTime(workTime);
                setInitTime(workTime);
                break;
            case 1:
                setTime(shortBreakTime);
                setInitTime(shortBreakTime);
                break;
            case 2:
                setTime(longBreakTime);
                setInitTime(longBreakTime);
                break;
            default:
                break;

        }
    },[active,workTime,shortBreakTime,longBreakTime])
    return(
        
        <StateContext.Provider value={{active,setActive,
        progress,setProgress,
        time,setTime,
        isActive,setIsActive,
        initTime,setInitTime,
        workTime,setWorkTime,
        shortBreakTime,setShortBreakTime,
        longBreakTime, setLongBreakTime,
         }}>
            {children}
        </StateContext.Provider>
    )
};

export default StateProvider;