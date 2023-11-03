import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [msg, setMsg]= useState('');

    const nameRef= useRef()
    const passwordRef= useRef()
    const cnfPasswordRef= useRef()
    const history =useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("submit")
        if(!nameRef.current.value|| !passwordRef.current.value || !cnfPasswordRef.current.value){
            setMsg("required!!")
        }
        else if(passwordRef.current.value !== cnfPasswordRef.current.value){
            setMsg("Password Not Matches with Confirm Password!!!")
        }else{
            setMsg('')
            let user = {name:nameRef.current.value, password:passwordRef.current.value}
            localStorage.setItem("setPass",JSON.stringify(user))
            history('/signin')
        }
    }

  return (
    <div>
        
        <span>{msg&& passwordRef.current.value!==cnfPasswordRef.current.value? msg:""}</span>
        

        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder='Enter Name' />
        <span>{msg&&!nameRef.current.value?msg:""}</span>
            <br />
            <input ref={passwordRef} type="password" placeholder='*****'  />
        <span>{msg&&!passwordRef.current.value?msg:""}</span>
            <br />
            <input ref={cnfPasswordRef}  type="password" placeholder='*****' />
        <span>{msg&&!cnfPasswordRef.current.value?msg:""}</span>
            <br />
            <button >SignUp</button>
        </form>
    </div>
  )
}
