import React, { Fragment, useEffect, useState } from 'react';
import { IconUserSquareRounded } from '@tabler/icons-react';
import flash from '../image/image 7.png';
import logo from '../image/logoflash.png';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


function Profile() {
    const navigate = useNavigate();

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const logout = () => {
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
            {/* ----Nav----- */}
            <header className="bg-midblack">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/home">
                            <img className="h-8 w-auto" src="https://cdn.discordapp.com/attachments/915609670587125760/1211220519928602704/the-flash-high-resolution-logo-transparent.png?ex=65ed6803&is=65daf303&hm=2799cb3aa0c0b01887ead34822d7c42ec006a2ef9287cd1120b1528b4c13680f&" alt="" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                        <a href='#' className='text-white mx-4 my-auto'>
                            How to Play
                        </a>
                        <IconUserSquareRounded className="text-white " size={36} />
                        {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
                    </div>
                </nav>
            </header>
            {/* ----Nav----- */}
            {/* <div class='bg-black text-red-500 w-[100] h-[8%] flex'>
                <img src={logo} alt='logo' className='w-[400px] p-2' />
                <div className='flex p-1 justify-end mr-5  w-full'>
                    <h1 className='flex items-center mr-5'>How to Play</h1>
                    <img src={flash} alt='flash' className='rounded-full' />
                </div>
            </div> */}

            <div className='flex'>
                <div className='p-20 h-full'>
                    <img src={flash} className="border-double border-4 border-sky-500" alt='flash' />
                    <button className='p-5 bg-blue-100 w-full mt-10 rounded-full hover:bg-sky-700 ' onClick={logout}>Logout</button>

                </div>
                <div className='w-full text-4xl font-semibold'>
                    <div className=' w-[50%]  text-left py-20 my-10'>
                        {name} <br></br>
                        Role : {role}
                    </div>

                    <div className='my-8 text-left text-3xl font-medium'>Your Flash Cards</div>
                    <div className='w-3/4 bg-red-100 mb-20 pb-14 grid grid-cols-2'>
                        <div className='w-full'>
                            <div className='m-14 bg-red-500 flex justify-center items-center h-5/6 hover:bg-blue-100'>
                                <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='m-14 bg-red-500 flex justify-center items-center h-5/6 hover:bg-blue-100'>
                                <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='m-14 bg-red-500 flex justify-center items-center h-5/6 hover:bg-blue-100'>
                                <img src={flash} alt='flash' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='m-14 bg-red-500 flex justify-center items-center h-5/6 hover:bg-blue-100'>
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