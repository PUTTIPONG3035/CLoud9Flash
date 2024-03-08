import React, { useEffect, useState } from 'react';
import logo from '../image/rabbit.svg'

import '../css/stylesReg.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {

  const navigate = useNavigate();
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const randomNumber = getRandomNumber(1, 100000000);
    const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  

  //login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
 
  
  
  //register
   const [id , setId] = useState(0);
  const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
      const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
  
  
  


  const toggleSections = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
    
  };
  
  const register = () =>{
        setId(randomNumber)
         const data = {
      id : id,
      username : usernameReg,
      password : passwordReg,

    }
    axios.post("http://54.237.35.150:3000/register", data).then((res) => {
      console.log(res.data.message);
      setMessage(res.data.message);
      localStorage.setItem('token', usernameReg); 
      navigate('/profile');
   
  })
  }

  const login = () =>{
    console.log("Folk")
    const data = {
      id : id,
      username : username,
      password : password

    }
    

    console.log(data)

    axios.post("http://54.237.35.150:3000/login", data).then((res) => {
      console.log(res.data.message);
      setMessage(res.data.message);
      localStorage.setItem('token', username); 
      navigate('/profile');
   
    

    })

  }


  useEffect(() =>{
    const token = localStorage.getItem('token');
    if(token){
      console.log(token)
      navigate('/profile');
    }
  })
    return (
        <div className="flex h-screen">
  
           <img src={logo} alt="Logo" className='flex-1 object-cover'/>

      <div className="flex-1 flex justify-center items-center">
        {showLogin && (
          <div className="w-8/12">
            <div className="flex mb-5">
              <button className=' text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-b-8 border-blue-700'>Sign In  </button>
              <button onClick={toggleSections} className=' hover:text-blue-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign Up</button>
            </div>

            <div className='text-center'>
              <h1>Login</h1>
            </div>
            <div className="bg-white rounded w-full p-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-[50px]  focus:outline-none focus:shadow-outline mb-2" type="button" onClick={login}>Sign In</button>
              </div>
              <div className="text-center">
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
                <a className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800" href="#">{message}</a>
              </div>
            </div>
          </div>
        )}
        {showSignup && (
          <div className="w-8/12">
            <div className="flex mb-5">
              <button onClick={toggleSections} className='hover:text-blue-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign In</button>
              <button className=' text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-b-8 border-blue-700'>Sign Up</button>
            </div>

            <div className='text-center'>
              <h1>Sign Up</h1>
            </div>
            <div className="bg-white  rounded w-full p-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" onChange={e => setUsernameReg(e.target.value)} />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setPasswordReg(e.target.value)} />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Confirm Password</label>
                <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setConfirmPasswordReg(e.target.value)}/>
              </div>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-[50px] focus:outline-none focus:shadow-outline" type="button" onClick={register}>Sign Up</button>
              </div>
            
            </div>
          </div>
        )}
      </div>
    </div>

    )
}


export default Register;