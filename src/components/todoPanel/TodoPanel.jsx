import React, { useState } from 'react'
import TodoCard from '../todoCard/TodoCard'
function TodoPanel() {

    const [todos, setTodos] = useState([{title:"go to gym", completed:true},{title:"leet code", completed:false}]);
    
    function handleUpdateTodo(index, {title, status}){
      console.log("title",title)
      console.log("status",status)
        // const ind=todos.findIndex((data)=>data.title==title&&data.completed==status);
        const temp = todos.map((todo, i)=>{
          if(i===index){
            todo.completed=status;
            todo.title= title;
          }
          return todo;
        });
        

        setTodos(temp)
        // console.log("data",temp)
        // console.log(index)
        // if(ind!==-1){
        //     const updatedTodos =todos;
        //     updatedTodos[ind].completed=status;
        //     updatedTodos[ind].title=title;
        //     console.log("updated todos",updatedTodos)
        //     setTodos(updatedTodos)
           
        // }

        
    }

    const handleDeleteTodo=(index)=>{
        setTodos(todos.filter((todo, i)=>i!==index))
    }
    
  return (
    <>
    {/* TODO PANEL  */}
    <div className="todoPanel">
        <div className="todoPanelContainer">

          <div className="todoHead">
            <div className="todoTitle">
              Todo Lists
            </div>

          </div>

          <div className="todoBody">
                {/* MAP THIS Body- Rows */}
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