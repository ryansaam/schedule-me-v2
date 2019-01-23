import React from 'react'

import DateNode from './DateNode.js'

export const WeekDayNames = props => {
  const names = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const nameElements = names.map(el =>
    <div key={el} style={{padding: "5px"}}>
      <svg viewBox="0 0 20 11" style={{width: "100%"}}>
        <text x="50%" y="6.7" dominantBaseline="middle" textAnchor="middle" style={{fill: props.colors.textColor, fontSize: "14px"}}>{el}</text>
      </svg>
    </div>
  )
  return (
    <div className="week-day-names" style={{backgroundColor: props.colors.weekDayNamesBG, height: props.height/7}} >
      {nameElements}
    </div>
  )
}

export const DateGrid = props => {
  const localDate = new Date()
  let radius = props.width / 7
  const renderedDate = props.date
  let dateData = props.calendarData
  const colors = props.colors
  const dateNodes = dateData.map(el => {
    if (el.type === "leadDate") return (
      <DateNode
        textColor={colors.textColor}
        bgColor={colors.leadDate}
        key={el.id} radius={radius}
        number={el.date}
        handleClick={props.handleClick}
      />
    )
    if (
      el.type === "monthDate" && 
      el.date === renderedDate.getDate() && 
      localDate.getMonth() === renderedDate.getMonth() &&
      localDate.getFullYear() === renderedDate.getFullYear()
    ) {
      return (
        <DateNode
          textColor={colors.textColor}
          bgColor={colors.currentDate}
          key={el.id}
          radius={radius}
          number={el.date} 
          handleClick={props.handleClick}
        />
      )
    }
    if (el.type === "monthDate") return (
      <DateNode
        textColor={colors.textColor}
        bgColor={colors.monthDate}
        key={el.id} 
        radius={radius}
        number={el.date}
        handleClick={props.handleClick} 
      />
    )
    if (el.type === "postDate") return (
      <DateNode
        textColor={colors.textColor}
        bgColor={colors.postDate}
        key={el.id}
        radius={radius}
        number={el.date}
        handleClick={props.handleClick}
      />
    )
    else { return null }
  })
  return (
    <div className="date-grid" style={{width: props.width+"px"}}>
      {dateNodes}
    </div> 
  )
}

const CalendarView = props => {
  return (
    <div style={{width: props.width+"px"}}>
      {props.children}
    </div>
  )
}

export default CalendarView
