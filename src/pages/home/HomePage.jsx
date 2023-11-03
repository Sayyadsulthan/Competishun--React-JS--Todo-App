import React from 'react'
import TodoPanel from '../../components/todoPanel/TodoPanel'
// import { useAuth } from '../../provider/AuthProvider'

export default function HomePage() {

  // const auth = useAuth()
  // console.log(auth)

    // const [todos, setTodos] = useState([{title:"go to gym", completed:true},{title:"leet code", completed:false}]);
    // const [isEditable, setIsEditable]= useState(false)

    // const handleEdit = (e)=>{
      
    // }
    
    // const handleEditable=()=>{
    //   setIsEditable(!isEditable)
    // }

  return (
    <div>
      <h1>Home Page</h1>
      <TodoPanel />
    </div>
  )
}
