import React, { useState } from 'react'
import Calendar from './Calendar.js'
import '../Calendar.css'

const Scheduler = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Calendar
        width={props.width}
        date={props.date}
        colors={props.colors}
        handleClick={(weekDay,month,date) => {
          setIsOpen(!isOpen)
          console.log(weekDay,month,date)
        }}
      />
      <div 
        id="sch-modal"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)", 
          position: "absolute", 
          height: "100%", 
          width:"100%",
          top: "0px",
          display: isOpen ? "grid" : "none",
          alignItems: "center",
          justifyItems: "center"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        { isOpen ? props.form : null }
      </div>
    </div>
  )
}

export default Scheduler;