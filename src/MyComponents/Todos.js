import React from 'react'
import {TodoIteam} from "../MyComponents/TodoIteam"; 

export const Todos = (props) => {
    let myStyle = {
        minHight: "70vh",
        margin:"10px auto"
    }
    return (
        <div className = "container " style={myStyle}>
            <h3 className="my-3 text-center">Todo List</h3>
            {props.todos.length===0? "No Todos found":  
             props.todos.map((todo)=>{
                return(
                <>
                <TodoIteam todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </>  
                )
            })   
                 }
            
        </div>
    )
}
