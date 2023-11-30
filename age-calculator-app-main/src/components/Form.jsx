import React from 'react';

function Form() {
 return (
  <form class='flex ' action='/'>
   <div class='day'>
    <label for='day' name='day'>
     Day
    </label>
    <input class='day' type='number' placeholder='DD' />
   </div>
   <div class='month'>
    <label for='month' name='month'>
     Month
    </label>
    <input class='month' type='number' placeholder='MM' />
   </div>
   <div class='year'>
    <label for='year' name='year'>
     Year
    </label>
    <input class='year' type='number' placeholder='YYYY' />
   </div>
  </form>
 );
}

export default Form;
