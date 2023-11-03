import React, { useEffect, useRef } from 'react'
import TodoCard from '../todoCard/TodoCard'
import { useAuth } from '../../provider/AuthProvider'
function TodoPanel() {

    const titleRef= useRef()
    const {todos, deleteTodo, createTodo, updateTodo}= useAuth()
    useEffect(()=>{
      console.log(todos)
    },[todos])

    function handleUpdateTodo(index, {title, status}){
        updateTodo(index, {title, status})
       
    }

    const handleDeleteTodo=(index)=>{
     
      deleteTodo(index)
      
    }

    const handleCreateTodo=(e)=>{
      e.preventDefault();
      if(!titleRef.current.value){
        return;
      }
      createTodo(titleRef.current.value)
    }
    
  return (
    <>
    {/* TODO PANEL  */}
    <div className='todoCreate'>
      <h1>Create Todo</h1>
      <form  onSubmit={handleCreateTodo}>
        <div className="todoForm">

        <input ref={titleRef} type="text" placeholder='Goto Gym' />
        <div className="createTodoBtn">

          <button>Add Todo</button>
        </div>
        </div>
      </form>
    </div>
    <div className="todoPanel">
      
        <div className="todoPanelContainer">

          <div className="todoHead">
            <div className="todoTitle">
              Todo Lists
            </div>

          </div>

          <div className="todoBody">
                {/* MAP THIS Body- Rows */}
                {console.log(todos)}
                {todos.map((todo, i)=>
                  <TodoCard index={i} todo={todo}  updateTodo={handleUpdateTodo} removeTodo={handleDeleteTodo} />
                )}
            </div>
            {/*  */}
        </div>
      </div>
    </>
  )
}

export default TodoPanel