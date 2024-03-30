import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import './App.css';
import { useState } from 'react';
import Model from './components/Model/Model';
import {FaCog} from "react-icons/fa"
function App() {
  const [isOpen,setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  } 
  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <>
    <Model isOpen={isOpen} onClose={onClose}/>
    <h1>Pomodoro</h1>
    <Tags/>
    <Timer/>
    <div className='CogIcon' onClick={onOpen}>
      <FaCog/>
    </div>
    </>
  )
}

export default App
