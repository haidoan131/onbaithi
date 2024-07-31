import React from 'react'
import { useState } from 'react';

export default function Add(props) {
    const {handle_add}=props
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
  return (
    <div>
       <input placeholder="nhap name" value={name} onChange={(e)=>setName(e.target.value)}
       
     

       />

<input placeholder="nhap age" value={age} onChange={(e)=>setAge(e.target.value)}
       
   

       />

       <button onClick={()=>handle_add({name:name,age:age})}>add</button>
    </div>
  )
}
