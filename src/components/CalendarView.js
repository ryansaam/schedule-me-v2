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

const getNextPostDateMonth = (month) => {
  switch (month + 2) {
    case 12:
      return 0
    case 13:
      return 1
    default:
      return month + 2
  }  
} 

export const DateGrid = props => {
  const monthNames = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
  const weekDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const localDate = new Date()
  let radius = props.width / 7
  const renderedDate = props.date
  let dateData = props.calendarData
  const colors = props.colors
  const dateNodes = dateData.map(el => {
    if (
      ((el.type === "leadDate" && renderedDate.getMonth() === localDate.getMonth()) ||
      (el.date < renderedDate.getDate() && el.type !== "postDate") ||
      (el.type === "leadDate" && el.date < renderedDate.getDate())) &&
      renderedDate.getFullYear() === localDate.getFullYear() &&
      el.type !== "nextPostDate"
    ) return (
      <div key={el.id}></div>
    )
    if (el.type === "leadDate") return (
      <DateNode
          textColor={colors.textColor}
          bgColor={colors.currentDate}
          key={el.id}
          radius={radius}
          number={el.date} 
          handleClick={props.handleClick}
          month={(renderedDate.getMonth() - 1 !== -1) ? renderedDate.getMonth() - 1 : 11}
          monthNames={monthNames}
          year={(renderedDate.getMonth() - 1 !== -1) ? renderedDate.getFullYear() : renderedDate.getFullYear() - 1}
          weekDayNames={weekDayNames}
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
          month={renderedDate.getMonth()}
          monthNames={monthNames}
          year={renderedDate.getFullYear()}
          weekDayNames={weekDayNames}
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
        month={renderedDate.getMonth()}
        monthNames={monthNames}
        year={renderedDate.getFullYear()}
        weekDayNames={weekDayNames}
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
        month={(renderedDate.getMonth() + 1 !== 12) ? renderedDate.getMonth() + 1 : 0}
        monthNames={monthNames}
        weekDayNames={weekDayNames}
        year={(renderedDate.getMonth() + 1 !== 12) ? renderedDate.getFullYear() : renderedDate.getFullYear() + 1}
      />
    )
    if (el.type === "nextPostDate") return (
      <DateNode
        textColor={colors.textColor}
        bgColor={colors.monthDate}
        key={el.id}
        radius={radius}
        number={el.date}
        handleClick={props.handleClick}
        month={getNextPostDateMonth(renderedDate.getMonth())}
        monthNames={monthNames}
        weekDayNames={weekDayNames}
        year={(renderedDate.getMonth() + 2 < 11) ? renderedDate.getFullYear() : renderedDate.getFullYear() + 1}
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
