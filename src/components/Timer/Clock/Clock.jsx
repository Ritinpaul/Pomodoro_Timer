import './Clock.css'
import { useContext,useEffect } from 'react'
import { StateContext } from '../../StateProvider';
export default function Clock(){
    const {time,setTime,isActive,setIsActive, initTime}  = useContext(StateContext);
    //controlling time with the startStop button
    useEffect(()=>{
        if (isActive && time>0){
            const interval = setInterval(() => {
                setTime((time)=>time-1);
            }, 1000);
            return () => clearInterval(interval);
        }
    },[time,isActive])
    // time and is Active are dependencies and not a prop
    // activating clock time
    const toggle = ()=>{
        setIsActive(!isActive);
    }

    // function to reset time
    const resetTime =()=>{
        setTime(initTime);
        setIsActive(false);
    }
    // function to covert minutes to seconds
    const getTime = (time) =>{
        const min = Math.floor(time/60);
        const sec = time%60;
        return `${min < 10 ? "0"+min : min}:${sec < 10 ? "0" + sec : sec}`;
    }
    return(
        <div className="clockContainer">
            <h2 className="timerText">{getTime(time)}</h2>
            <button className='startStop' onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
            {time && <button className='resetButton' onClick={resetTime}>Reset</button>}
        </div>
    )
}