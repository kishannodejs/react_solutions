import React from 'react';
import {useState} from "react"
export default function App() {
  const [gender, setGender] = useState('male')
  
  function changeValues(event) {
    let {name,type} = event.target;
    let value = type==='checkbox'? event.target.checked : event.target.value;
    if(name==='gender') setGender(value)
  }

  return (
    <div>
<p> You are : {gender}</p>
    <form>
      <p>Gender:</p>
      <label>
      <input type='radio' onChange={changeValues} name='gender' value='male' checked={gender === 'male'}/>
      Male
      </label>
      <label>
      <input type='radio' onChange={changeValues} name='gender' value='female' checked={gender==='female'}/>
      Female
      </label>
      </form>
    </div>
  );
  }