import React, { useState } from 'react';
import Card from './components/Card';
// import './App.css';
import './index.css';
import image from './assets/images/icon-arrow.svg';

function App() {
 const [date, setDate] = useState('');
 const [month, setMonth] = useState('');
 const [year, setYear] = useState('');
 const [isValidDate, setIsInvalidDate] = useState(false);

 function handleYearChange(e) {
  setYear(parseInt(e.target.value));
  console.log(year);
 }
 function handleMonthChange(e) {
  setMonth(parseInt(e.target.value));
  console.log(month);
 }
 function handleDateChange(e) {
  setDate(parseInt(e.target.value));
  console.log(date);
 }

 function validateForm() {
  if (!year || !month || !date) {
   return setIsInvalidDate(false);
  }

  // Check if the day number is between 1-31
  if (!(date >= 1 && date <= 31)) {
   return setIsInvalidDate(false);
  }

  // Check if the month number is between 1-12
  if (!(month >= 1 && month <= 12)) {
   return setIsInvalidDate(false);
  }

  // Check if the date is in the future
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, date);
  if (inputDate > currentDate) {
   return setIsInvalidDate(false);
  }

  // Check for the number of days in the given month
  const daysInMonth = new Date(year, month, 0).getDate();
  if (date > daysInMonth) {
   setIsInvalidDate(false);
  }
  return setIsInvalidDate(true);
 }

 function handleSubmit() {
  isValidDate();
 }

 return (
  <div className='container '>
   <div className='card '>
    <form className='flex ' action='/'>
     <div className='day'>
      <label for='day' name='day'>
       Day
      </label>
      <input
       onClick={handleSubmit}
       onChange={handleDateChange}
       className='day'
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
       onClick={handleSubmit}
       onChange={handleMonthChange}
       className='month'
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
       onClick={handleSubmit}
       onChange={handleYearChange}
       className='year'
       type='number'
       placeholder='YYYY'
       value={year}
      />
     </div>
    </form>
    <div className='separator'>
     <hr />
     <img className='p-4 rounded-full' src={image} alt='Arrow Image' />
    </div>

    <div className='result'>
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
