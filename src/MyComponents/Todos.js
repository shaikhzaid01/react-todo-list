import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
    return (
        <div className="container my-5">
            <h3 className=' my-3'>Todos List</h3>
            {props.todos.length === 0? "No Todos For Today":
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete} />
            })}
            

        </div>
    )
}

export default Todos

