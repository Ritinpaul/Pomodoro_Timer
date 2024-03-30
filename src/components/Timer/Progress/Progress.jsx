import './Progress.css';
import { useContext, useEffect} from 'react';
import Clock from '../Clock/Clock';
import { StateContext } from '../../StateProvider';
export default function Progress(){
    const {progress,setProgress,time, initTime} = useContext(StateContext);
    useEffect(()=>{
        setProgress(time/(initTime/100))
    },[time,initTime,setProgress])
    const innerCircleStyle = {
        background: `conic-gradient(#3baea0 ${progress}%, white ${progress}%)`,
    };
    return(
        <div className='outerCircle' progress={progress} style={innerCircleStyle}>
            <div className='innerCircle'>
                <Clock/>
            </div>
        </div>
    )
}
