import React, { useState, useEffect } from 'react'

import CalendarUI, { RotatingMonths, ControlArrow } from './CalendarUI.js'
import CalendarView, { DateGrid, WeekDayNames } from './CalendarView.js'
import { fillCalendar } from '../calendar.tools.js';

const Calendar = props => {
  const [renderedDate, setRenderedDate] = useState(props.date)
  const [degrees, setDegrees] = useState(0)
  const [topMonthIndex, setTopMonthIndex] = useState(renderedDate.getMonth())
  const [bottomMonthIndex, setBottomMonthIndex] = useState(renderedDate.getMonth())
  const [toggleIndex, setToggleIndex] = useState(0b0)
  const [width,setWidth] = useState(props.width)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const year = renderedDate.getFullYear()
  const localDate = new Date()
  const calendarData = fillCalendar(renderedDate.getMonth(), renderedDate.getFullYear(), renderedDate.getDate())

  const changeCalendar = event => {
    const id = event.currentTarget.id
    let year = renderedDate.getFullYear()
    let month = renderedDate.getMonth()
    if (id === "next") {
      year = (month + 1 === 12) ? year + 1 : year
      month = (year === renderedDate.getFullYear()) ? month + 1 : 0
      if (month === props.date.getMonth() && year === props.date.getFullYear())
        setRenderedDate(localDate)
      else 
        setRenderedDate(new Date(year, month))
      setDegrees(degrees - 180)
    }
    if (id === "prev") {
      year = (month - 1 === -1) ? year - 1 : year
      month = (year === renderedDate.getFullYear()) ? month - 1 : 11
      if (month === props.date.getMonth() && year === props.date.getFullYear())
        setRenderedDate(localDate)
      else 
        setRenderedDate(new Date(year, month))
      setDegrees(degrees + 180)
    }
  }
  
  useEffect(() => {
    if (toggleIndex)
      setBottomMonthIndex(renderedDate.getMonth())
    else
      setTopMonthIndex(renderedDate.getMonth())
    setToggleIndex(~~!toggleIndex)
  },[renderedDate])

  useEffect(() => {
    if (!props.width) {
      setWidth(document.getElementById("calendar-root").offsetWidth)
    }
  },[])

  return (
    <div id="calendar-root" className="calendar" style={{backgroundColor: props.colors.background, width: width+"px"}}>
      <CalendarUI colors={props.colors.calendarUI} monthsDisplay={
        <RotatingMonths date={renderedDate} rotate={degrees}>
          <text id="month-year-view" className="month-year" x="75" y="50" 
          style={{fill: props.colors.textColor}}>{`${months[topMonthIndex]} ${year}`}</text>
          <text 
            id="month-year-view" 
            className="month-year" 
            x="75" 
            y="140"
            style={{fill: props.colors.textColor, transformOrigin: "50% 50%", transform: "translate(18px, 200px) rotate(180deg)"}}
          >
            {`${months[bottomMonthIndex]} ${year}`}
          </text>
        </RotatingMonths>
      }>
        <ControlArrow
          y={40}
          arrowColor={props.colors.calendarUI.textColor}
          buttonColor={props.colors.calendarUI.arrowsBG}
          id={"prev"}
          onClick={changeCalendar}
          canClick={renderedDate.getMonth() - 1 < localDate.getMonth() ? false : true}
        />
        <ControlArrow
          x={150}
          y={40}
          arrowColor={props.colors.calendarUI.textColor}
          buttonColor={props.colors.calendarUI.arrowsBG} 
          flipArrow
          id={"next"}
          onClick={changeCalendar}
          canClick
        />
      </CalendarUI>
      <CalendarView width={width}>
        <WeekDayNames colors={props.colors.calendarView} height={width} />
        <DateGrid 
          colors={props.colors.calendarView}
          nullNodeColor={props.colors.background}
          width={width}
          date={renderedDate}
          calendarData={calendarData}
          handleClick={props.handleClick}
        />
      </CalendarView>
    </div>
  )
}

export default Calendar