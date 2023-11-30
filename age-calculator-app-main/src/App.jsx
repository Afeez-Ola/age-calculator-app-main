import React, { useState } from 'react';
import Card from './components/Card';
// import './App.css';
import './index.css';
import image from './assets/images/icon-arrow.svg';

function App() {
 const [date, setDate] = useState("");
 const [month, setMonth] = useState("");
 const [year, setYear] = useState("");
 const [isValidDate, setIsInvalidDate] = useState(false);

 function handleYearChange(e) {
  setYear(e.target.value);
  console.log(year);
 }
 function handleMonthChange(e) {
  setMonth(e.target.value);
  console.log(month);
 }
 function handleDateChange(e) {
  setDate(e.target.value);
  console.log(date);
 }

 return (
  <div class='container '>
   <div class='card '>
    <form class='flex ' action='/'>
     <div class='day'>
      <label for='day' name='day'>
       Day
      </label>
      <input
       onChange={handleDateChange}
       class='day'
       type='number'
       placeholder='DD'
       value={date}
      />
     </div>
     <div class='month'>
      <label for='month' name='month'>
       Month
      </label>
      <input
       onChange={handleMonthChange}
       class='month'
       type='number'
       placeholder='MM'
       value={month}
      />
     </div>
     <div class='year'>
      <label for='year' name='year'>
       Year
      </label>
      <input
       onChange={handleYearChange}
       class='year'
       type='number'
       placeholder='YYYY'
       value={year}
      />
     </div>
    </form>
    <div class='separator'>
     <hr />
     <img class='p-4 rounded-full' src={image} alt='Arrow Image' />
    </div>

    <div class='result'>
     <h1>
      <span>--</span> Years
     </h1>
     <h1>
      <span>--</span> Months
     </h1>
     <h1>
      <span>--</span> days
     </h1>
    </div>
   </div>
  </div>
 );
}

export default App;
