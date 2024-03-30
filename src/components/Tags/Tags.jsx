import './Tags.css';
import { useState } from 'react';
import { useContext } from 'react';
import { StateContext } from '../StateProvider';
export default function Tags(){
    //const [active,setActive] = useState(StateContext);
    // replacing use state with useContext so that we can manage state globally
    const {active,setActive} = useContext(StateContext);
    const navs = ["Work","Short Break","Long Break"];
    const handleTag = (index) => {setActive(index);};
    return(
        <div className='tagsContainer'>
            {navs.map((tag,idx)=>(
            <button key={idx}
            // call back syntex
            onClick={()=>handleTag(idx)}
            active={active===idx}
            className='tags'>{tag}
            </button>
        ))}</div>
    )
}