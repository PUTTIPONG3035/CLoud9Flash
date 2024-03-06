import React, { useEffect } from 'react';
import flash from '../image/image 7.png';
import logo from '../image/logoflash.png';
import axios from 'axios'


function Profile() {


    useEffect(() => {
        axios.get("http://localhost:3000").then(res => console.log(res))
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
                    <button className='p-5 bg-blue-100 w-full mt-[400px] rounded-full hover:bg-sky-700 '>Logout</button>
                
                </div>
                <div className='w-full text-[50px]'>
                    <div className=' w-[50%]  text-center p-20 m-10 '>
                        Puttipong Panich
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