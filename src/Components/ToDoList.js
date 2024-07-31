import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addStudent,deleteStudent} from "./../redux/todolistSlice"
import Add from './Add';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ToDoList() {
    const [flag,setFlag]=useState("")
    const dispatch=useDispatch()
    let students=useSelector(state=>state.students.students)
    let studenttemp;
    const handle_add=(text)=>{
        dispatch(addStudent(text))
        
    }
    const filterStudent=(list,flag)=>{
        if(flag==="CHECKED"){
            return list.filter(item=>item.checked)
        }
        else if(flag==="NOCHECKED"){
            return list.filter(item=>!item.checked)
        }
        else 
            return list
    }

    useEffect(()=>{
        if(localStorage.getItem(("users"))){
            students = JSON.parse(localStorage.getItem("users"));
        }
    
       },[])

     
  return (
    <div>
        <Add handle_add={handle_add}/>
            {

students&& students.map((item,index)=>
                    <div> {item.id} {item.name} {item.age}
                    <button onClick={()=>dispatch(deleteStudent(item.id))}>delete</button>
                    </div>
                )

            }

            <button onClick={()=>setFlag("CHECKED")}>checked</button>
            <button onClick={()=>setFlag("NOCHECKED")}>NO CHECKED</button>
            <button onClick={()=>setFlag("CLEAR")}>clear</button>


    </div>
  )
}
