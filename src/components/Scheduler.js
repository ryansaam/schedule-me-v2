import React, { useState } from 'react'
import Calendar from './Calendar.js'
import '../Calendar.css'

const Scheduler = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [nodeData, setNodeData] = useState(null)
  const handleClick = (weekDay,month,date,year) => {
    setIsOpen(!isOpen)
    setNodeData({weekDay,month,date,year})
  }
  const form = React.cloneElement(props.form, {...nodeData, handleClick})
  return (
    <div>
      <Calendar
        width={props.width}
        date={props.date}
        colors={props.colors}
        handleClick={handleClick}
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
        { isOpen ? form : null }
      </div>
    </div>
  )
}

export default Scheduler;