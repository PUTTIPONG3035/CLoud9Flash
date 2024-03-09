import React, { useEffect, useState } from 'react';
import flash from '../image/image 7.png';
import logo from '../image/logoflash.png';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Profile() {
      const navigate = useNavigate();
    
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    
    const logout = () =>{
        // To delete an item from localStorage
      localStorage.removeItem('token');
       navigate('/');

    }


    useEffect(() => {
        axios.get("http://52.204.195.112:3000").then(res => {
            console.log(res.data.data[0].id)
            console.log(res.data.data[0].name)
            console.log(res.data.data[0].role)
            setNumber(res.data.data[0].id)
            setName(res.data.data[0].name)
            setRole(res.data.data[0].role)
        })
    });

    return (
        <div className='h-screen'>
            <div class='bg-black text-red-500 w-[100] h-[8%] flex'>
                <img src={logo} alt='logo' className='w-[400px] p-2' />
                <div className='flex p-1 justify-end mr-5  w-full'>
                    <h1 className='flex items-center mr-5'>How to Play</h1>
                <img src={flash} alt='flash' className='rounded-full' />
                </div>
            </div>

            <div className='flex'>
                <div className=' p-20 h-full'>
                    <img src={flash} alt='flash' />
                    <button className='p-5 bg-blue-100 w-full mt-[400px] rounded-full hover:bg-sky-700 ' onClick={logout}>Logout</button>
                
                </div>
                <div className='w-full text-[50px]'>
                    <div className=' w-[50%]  text-center p-20 m-10 '>
                        {name} <br></br>
                        Role : {role}
                    </div>
              
                    <div className='flex flex-wrap w-full bg-red-100 h-full'>
                    <div className='w-2/6 '>
                            <div className='m-10 bg-red-500 flex justify-center items-center h-5/6 hover:bg-blue-100'>
                            <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-2/6'>
                            <div className='m-10 bg-red-500 flex justify-center items-center h-5/6'>
                            <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-2/6'>
                            <div className='m-10 bg-red-500 flex justify-center items-center h-5/6'>
                            <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-2/6'>
                            <div className='m-10 bg-red-500 flex justify-center items-center h-5/6'>
                            <img src={flash} alt='flash' /> 
                            </div>
                        </div>


                    </div>

                </div>
            </div>



        </div>

    )
}


export default Profile;