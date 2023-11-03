import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

export default function SignIn() {
    const [msg, setMsg]= useState('');
    const nameRef = useRef()
    const passwordRef= useRef()
    const history = useNavigate()
    const {user, updateUser}= useAuth()

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(passwordRef)
        if(!nameRef.current.value|| !passwordRef.current.value ){
            setMsg("required!!")
        }
        else{
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
                updateUser(user)
                history('/')
        }
    }

    if(user){
        return <Navigate to="/" />
    }

  return (
    <div className='signInWrapper'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="loginForm">
                    <h1>Sign In </h1>

                    <div className="input-msg">
                        <input ref={nameRef} type="text" placeholder='Enter Name' />
                        <span>{msg&&!nameRef.current.value?msg:""}</span>
                    </div>
                    
                    <div className="input-msg">
                        <input ref={passwordRef} type="password" placeholder='*****'  />
                        <span>{msg&&!passwordRef.current.value?msg:""}</span>
                    </div>
                    
                    <button >Sign In</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}
