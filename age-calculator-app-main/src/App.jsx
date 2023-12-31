import React, { useState } from 'react';
import Card from './components/Card';
import './index.css';
import image from './assets/images/icon-arrow.svg';

function App() {
 const [date, setDate] = useState('');
 const [month, setMonth] = useState('');
 const [year, setYear] = useState('');
 const [isValidDate, setIsInvalidDate] = useState(true);
 const [isValidMonth, setIsInvalidMonth] = useState(true);
 const [isValidYear, setIsInvalidYear] = useState(true);
 const [isEmpty, setIsEmpty] = useState(true);

 function handleYearChange(e) {
  setYear(parseInt(e.target.value));
  console.log(year, isEmpty);
 }
 function handleMonthChange(e) {
  setMonth(parseInt(e.target.value));
  console.log(month, isEmpty);
 }
 function handleDateChange(e) {
  setDate(parseInt(e.target.value));
  console.log(date, isEmpty);
 }

 function validateForm() {
  if (year == '' || month == '' || date == '') {
   return setIsEmpty(true);
  }

  // Check if the day number is between 1-31
  if (!(date >= 1 && date <= 31)) {
   return setIsInvalidDate(false);
  }

  // Check if the month number is between 1-12
  if (!(month >= 1 && month <= 12)) {
   return setIsInvalidMonth(false);
  }

  // Check if the date is in the future
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, date);
  if (inputDate > currentDate) {
   return setIsInvalidYear(false);
  }

  // Check for the number of days in the given month
  const secondDate = new Date();
  const firstDate = new Date(`${year}-${month}-${date}`);
  if (firstDate.setHours(0, 0, 0, 0) >= secondDate.setHours(0, 0, 0, 0)) {
   return setIsInvalidDate(false);
  }
  //   const daysInMonth = new Date(year, month, 0).getDate();
  //   if (date > daysInMonth) {
  //    setIsInvalidDate(false);
  //   }
  return setIsInvalidDate(true);
 }

 function handleSubmit() {
  validateForm();
  console.log(isValidDate);
 }

 return (
  <div className='container '>
   <div className='card '>
    <form className='flex ' action='/'>
     <div className={`day  ${isEmpty && 'error'}`}>
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
       required
      />
      {!isValidDate ? <p className='invalid'>The date is invalid</p> : ' '}
     </div>
     <div className={`month  ${isEmpty && 'error'}`}>
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
       required
      />
      {!isValidMonth ? <p className='invalid'>The date is invalid</p> : ' '}{' '}
     </div>
     <div className={`year  ${isEmpty && 'error'}`}>
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
       required
      />
      {!isValidYear ? <p className='invalid'>The date is invalid</p> : ' '}{' '}
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
