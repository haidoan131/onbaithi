import{createSlice} from "@reduxjs/toolkit"

const initialState={
    students: [
        {
            id:1,
            name:"tho",
            age:12,
            checked:false
        },
        {
            id:2,
            name:"meo",
            age:12,
            checked:false
        },
        {
            id:3,
            name:"ga",
            age:12,
            checked:false
        },
        {
            id:4,
            name:"vit",
            age:12,
            checked:false
        }
    
        ,
        {
            id:5,
            name:"cho",
            age:12,
            checked:false
        },
        {
            id:5,
            name:"cho",
            age:12,
            checked:false
        },
        {
            id:5,
            name:"cho",
            age:12,
            checked:false
        }
        ]
        
        
}
if(localStorage.getItem(("users"))){
    initialState.students = JSON.parse(localStorage.getItem("users"));
    }

const listSlice=createSlice({
  
    name:"students",
    initialState,
    reducers:{
       addStudent(state,action){
        let idmax=state.students.reduce((max_value,student)=>Math.max(max_value,student.id),-Infinity)
        // state.students=[...state.students,{id:stat.stuedents.length===0?1:idmax+1,name:action.payload,checked:true}]
        state.students=[...state.students,  {id:state.students.length===0?1:idmax+1,...action.payload}]
        localStorage.setItem("users", JSON.stringify(state.students));
      
       },
       deleteStudent(state,action){
        state.students=state.students.filter(item=>item.id!==action.payload)

        localStorage.setItem("users", JSON.stringify(state.students));
       }
    }
})

export const{addStudent,deleteStudent}=listSlice.actions
export default listSlice.reducer