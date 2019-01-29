import React from "react"

export const RotatingMonths = props => {
  return (
    <g
      style={{transform: `rotate(${props.rotate}deg) translate(-10px)`}}
      className="month-year-group"
    >
      <rect x="50" y="30" style={{fill: "none", width: "120", height: "120"}} />
      {props.children}
    </g>
  )
}

export const ControlArrow = props => {
  const arrowDirection = props.flipArrow ? 180 : 0
  return (
    <svg 
      onClick={props.canClick ? props.onClick : null}
      x={props.x} 
      y={props.y} 
      viewBox="0 0 50 30" 
      width="50" 
      height="30"
      id={props.id}
    >
      <rect rx="15" style={{fill: props.buttonColor, width: "50", height: "30"}}/>
      <path d="M 15, 12 h 30, 0 v 0, 5 h -30, 0 l 5, 8 h -6, 0 l -8, -10 l 8, -10 h 6, 0 z"
      style={{
        fill: props.arrowColor,
        transformOrigin: "50% 50%",
        transform: `rotateY(${arrowDirection}deg)`,
        opacity: props.canClick ? "1" : "0",
        transition: "opacity ease-in 300ms"
      }}/>
    </svg>
  )
}

const CalendarUI = props => {
  const localDate = new Date()
  return (
    <div>
      <svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg">
        <rect rx="15" style={{fill: props.colors.currentDateBG, width: "200", height: "30"}} />
        <path d="M 100, 30 h 50, 0 c 0, 10, 0, 25, -25, 25 h -50, 0 c -10, 0, -25, 0, -25, -25 h 50, 0 z" 
        style={{fill: props.colors.monthYearViewBG}}/>
        <text id="full-date-view" x="34" y="20" style={{fill: props.colors.textColor}}>{localDate.toDateString()}</text>
        {props.monthsDisplay}
        <path d="M 150, 30 h 50, 0 v 0, 40 h -200, 0 v -40, 0 h 50, 0 c 0, 10, 0, 25, 25, 25 h 50, 0 c 10, 0, 25, 0, 25, -25 z"
        style={{fill: props.colors.background}}/>
        {props.children}
      </svg>
    </div>
  )
}

export default CalendarUI