# schedule-me

A date picker component for react applications built off my colorful-calendar

```jsx
import React from 'react'
import { Scheduler, MyForm, colorTheme } from '../scheduler'

const App = () => {
  return (
    <div className="App">
      <Scheduler
        width={300}
        date={new Date()}
        colors={colorTheme.redflat}
        form={<MyForm />}
      >
    <div>
  )
}
```

## Required component properties

Properties | Type | Description
------------ | ------------- | -------------
width | Number | Sets the width of the component in pixels
date | Object | Provides the component with the date passed to it
colors | Object | Provides the component with the color theme chosen from calendar.colors.js
form | Element | custom form that is visible after clicking a date

## Optional feature
Pass a custom colors object

```js
{
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}
```
... or if you wish you can create a custom.colors.js file  
Note: you can name this file whatever you would like.

### custom.colors.js
```js
const myNewColorTheme = {
  textColor: "#000",
  componentBG: "#292828",
  header1BG: "#fff",
  header2BG: "#fff",
  arrowsBG: "#fff",
  weekDayNamesBG: "#fff",
  prevMonthNodesBG: "#8ee5ff",
  currentDateNodeBG: "#c4c1c1",
  currentMonthNodesBG: "#fff",
  nextMonthNodesBG: "#8ee5ff"
}

export { myNewColorTheme, ... , ... }
```
### App.js
```jsx
import React from 'react'
import { Scheduler, MyForm } from '../scheduler'
import { myNewColorTheme } from './custom.colors.js'

const App = () => {
  return (
     <div className="App">
       <Scheduler
         width={300}
         date={new Date()}
         colors={myNewColorTheme}
         form={<MyForm />}
       >
     <div>
  )
}
```
