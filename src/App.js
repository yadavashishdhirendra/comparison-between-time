import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [time, setTime] = useState('')

  const [output, setOutput] = useState(false)

  const [show, setShow] = useState(false)

  const handleTime = (e) => {
    e.preventDefault();
    var selectedTime = time;
    var currentTime = new Date();
    // console.log("Today Current Time", currentTime)
    var selectedTimeStamp = (currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + selectedTime;
    var uservalue = new Date(selectedTimeStamp);
    // console.log("user Input", uservalue, "Current value", currentTime)
    if (uservalue < currentTime) {
      setOutput(true)
      setShow(true)
    }
    else {
      setOutput(false)
      setShow(true)
    }
  }

  return (
    <div className='Main_container'>
      <form onSubmit={(e) => handleTime(e)}>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Please Enter Time, for eg: 11:00 am" />
        {
          !time ? null : <button className='btn_submit' type='submit'>Check</button>
        }
      </form>
      {
        show ? <div className='output'>
          {
            output ? <p className='danger'>The Time Is Passed Away!</p> : output === false ? <p className='success'>The Time is Currently Running (Greater Than CurrentTime)...</p> : null
          }
        </div> : null
      }
    </div>
  )
}

export default App