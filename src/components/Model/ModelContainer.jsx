import React, { useContext } from 'react';
import './ModelContainer.css';
import { FaWindowClose } from 'react-icons/fa';
import { Formik,Form,Field } from 'formik';
import {StateContext} from '../StateProvider';
const ModelContainer = ({isOpen, onClose}) => {
  const {
    workTime,setWorkTime,
    shortBreakTime,setShortBreakTime,
    longBreakTime, setLongBreakTime} = useContext(StateContext);
  return (
    <div className='Container'>
        <div className='ModelContainer'>
            <div className='ModelHeader'>
                <h1 className='ModelTitle'>Settings</h1>
                <button className='ModelCloseButton' onClick={onClose}><FaWindowClose fontSize="3rem"/></button>
            </div>
            <div className='ModelBody'>
              <Formik initialValues={{work:workTime/60,short:shortBreakTime/60,long:longBreakTime/60,}}
              onSubmit={(values)=>{setWorkTime(values.work * 60);setShortBreakTime(values.short * 60);setLongBreakTime(values.long * 60);onclose();}}>
                <Form>
                  <div className='InputWrapper'>
                  <div className='FormControl'>
                    <label htmlFor="work">Work</label>
                    <Field name="work" min="1" max="60"/> 
                  </div>
                  <div className='FormControl'>
                    <label htmlFor="short">Short Break</label>
                    <Field name="short" min="1" max="60"/> 
                  </div>
                  <div className='FormControl'>
                    <label htmlFor="long">Long Break</label>
                    <Field name="long" min="1" max="60"/> 
                  </div>
                  </div>
                  <div className='ButtonWrapper'>
                    <button className="ApplyButton" type='submit'>Apply</button>
                  </div>
                </Form>
              </Formik>
            </div>
        </div>
    </div>
  )
}

export default ModelContainer