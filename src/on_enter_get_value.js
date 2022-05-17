import React from 'react';
import {useState} from "react"
export default function App() {
  const [name,setName] = useState('');
 
  function changeValues(event) {
    let {name,type} = event.target;
    let value = type==='checkbox'? event.target.checked : event.target.value;
    if(name==='name') setName(value);
 }

  return (
    <div>
<p>Name : {name} </p>
  <form>
      <input type='text' onChange={changeValues}   name='name' autoComplete='false' />
      </form>
    </div>
  );
  }
