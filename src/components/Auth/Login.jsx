import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

const submitHandler = (e) => {
  e.preventDefault();
  handleLogin(email,password)
  console.log("form submitted")
  
  setEmail("")
  setPassword("")
}
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='p-20 border-2 border-emerald-500 rounded-xl '>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col justify-center'>
          <input
          value={email}
          onChange={(e)=>{
              setEmail(e.target.value)
          }}
          required
          className='px-5 py-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-500 placeholder:' type="email" placeholder='Enter your Email'/>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required 
          className='px-5 py-4 mt-3 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-500 placeholder:'type="password" placeholder='Enter your Password'/>
          <button className='px-5 py-4 mt-5 text-xl text-white border-none rounded-full outline-none bg-emerald-500 placeholder:' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login