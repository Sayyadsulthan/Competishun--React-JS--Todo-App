import React, { useEffect, useRef, useState } from 'react'
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
            setTimeout(()=>setMsg("") ,2000)
        }else{
            setMsg('')
            let user = {name:nameRef.current.value, password:passwordRef.current.value}
            localStorage.setItem("setPass",JSON.stringify(user))
            history('/signin')
        }
    }

  return (
    <div className='signUpWrapper'>
        
        <span>{msg&& passwordRef.current.value!==cnfPasswordRef.current.value && cnfPasswordRef.current.value!==""&&passwordRef.current.value!==""? msg:""}</span>
        
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="loginForm">
                    <h1>SignUp </h1>
                    <div className="input-msg">
                        <input ref={nameRef} type="text" placeholder='Enter Name' />
                        <span>{msg&&!nameRef.current.value?msg:""}</span>
                    </div>
                    
                    <div className="input-msg">
                        <input ref={passwordRef} type="password" placeholder='*****'  />
                        <span>{msg&&!passwordRef.current.value?msg:""}</span>
                    </div>
                    
                    <div className="input-msg">
                        <input ref={cnfPasswordRef}  type="password" placeholder='*****' />
                        <span>{msg&&!cnfPasswordRef.current.value?msg:""}</span>
                    </div>
                    
                    <button >SignUp</button>
                </div>  
            
            </form>

        </div>
        
    </div>
  )
}
