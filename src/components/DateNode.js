import React from "react"

export const NullDateNode = props => {
  return (
    <div
      className="date-node"
      style={{height: props.radius+"px", width: props.radius+"px", color: props.textColor}}
    >
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle style={{fill: props.bgColor, cursor: "pointer"}} cx="25" cy="25" r="25" />
        </g>
      </svg>
    </div>
  )
}

const DateNode = props => {
  const handleClick = (weekDay , month, date) => event => {
    event.stopPropagation()
    props.handleClick(weekDay,props.monthNames[month],date)
  }
  return (
    <div
      className="date-node"
      style={{height: props.radius+"px", width: props.radius+"px", color: props.textColor}}
    >
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <g onClick={
          handleClick(props.weekDayNames[(new Date(props.year, props.month, props.number).getDay())],props.month,props.number)
        }>
          <circle style={{fill: props.bgColor, cursor: "pointer"}} cx="25" cy="25" r="25" />
          <text
            x="50%"
            y="27"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{fill: props.textColor, fontSize: "22px", cursor: "pointer"}}
          >
            {props.number}
          </text>
        </g>
      </svg>
    </div>
  )
}

export default DateNode