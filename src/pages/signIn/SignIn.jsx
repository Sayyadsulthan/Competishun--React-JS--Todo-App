import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [msg, setMsg]= useState('');
    const nameRef = useRef()
    const passwordRef= useRef()
    const cnfPasswordRef= useRef()
    const history = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(passwordRef)
        if(!nameRef.current.value|| !passwordRef.current.value || !cnfPasswordRef.current.value){
            setMsg("required!!")
        }
        else if(passwordRef.current.value !== cnfPasswordRef.current.value){
            setMsg("Password Not Matches with Confirm Password!!!")
        }else{
            const userData = localStorage.getItem("setPass");
            
            let user = {name:nameRef.current.value, password:passwordRef.current.value}
            // let res = JSON.parse(userData)
            // console.log(JSON.stringify(user)==userData)
            // console.log(res)
            
            if(JSON.stringify(user)!==userData){
                setMsg("Invalid Credentials!!!")
                return;
            }
                setMsg('')
                history('/')
        }
    }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder='Enter Name' />
            <span>{msg? msg:""}</span>
            <br />
            <input ref={passwordRef} type="password" placeholder='*****'  />
            <br />
            <input ref={cnfPasswordRef}  type="password" placeholder='*****' />
            <br />
            <button >SignIn</button>
        </form>
    </div>
  )
}
