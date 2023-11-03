import React, { useEffect, useRef, useState } from 'react'

function TodoBodyCard({index,todo, updateTodo, removeTodo}) {

  const [isEditable, setIsEditable]= useState(false)
  const [isCompleted,setIsCompleted]= useState(todo.completed)
  const [loading, setLoading]= useState(true)

  const titleRef = useRef()
    useEffect(()=>{
      
      setLoading(false)
    },[todo])

    const handleEditable=()=>{
      setIsEditable(!isEditable)
    }
    const handleUpdate=()=>{
      setLoading(true)
      setIsEditable(false)
      console.log(isEditable)
      updateTodo(index,{title: titleRef.current.value,status:isCompleted} )
      setTimeout(()=>setLoading(false),0)
    }


  return (
    <>
      <div className="todoRow">
                    <div className="todoText">
                        
                        <div className="textLeft">
                          

                          <input ref={titleRef} type="text" defaultValue={todo.title}   disabled={!isEditable} />
                        
                          
                          <div className="todoEditBtn">
                            <img  src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png" alt="Edit btn" onClick={handleEditable}/>
                          </div>
                        </div>
                        <div className="todoStatus">
                            <img src={todo.completed?"https://cdn-icons-png.flaticon.com/128/190/190411.png":"https://cdn-icons-png.flaticon.com/128/753/753345.png"} alt="Status" />
                        </div>
                    </div>

                    <div className="todoButtons">
                        {/* <div className="todoEditBtn">
                        <img src="" alt="Edit btn" onClick={handleEditable}/>
                        </div> */}

                        <div className="todoStatusCheckBtn">
                       
                          <img onClick={()=>setIsCompleted(false)}  src="https://cdn-icons-png.flaticon.com/128/753/753345.png" alt="todoPending Btn" />
                        
                          <img onClick={()=>setIsCompleted(true)} src="https://cdn-icons-png.flaticon.com/128/190/190411.png" alt="Complete Btn" />
                          
                        </div>

                        <div className="todoSubmitBtn">
                          <img onClick={handleUpdate} src="https://cdn-icons-png.flaticon.com/128/11282/11282660.png" alt="updateBtn" />
                        </div>

                        <div className="todoDeleteBtn">
                        <img onClick={()=>removeTodo(index)} src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" alt="Delete Btn" />
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default TodoBodyCard