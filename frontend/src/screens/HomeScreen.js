import React from 'react';
import { IconUserSquareRounded, IconHeart } from '@tabler/icons-react';
// import '../css/styles.css';
import '../css/landing.css';
import { Link } from 'react-router-dom';


const card = [
    { id: 1, name: 'Korean I', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
    { id: 2, name: 'Thai II', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
    { id: 3, name: 'Eng fundamental', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
    { id: 4, name: 'Hospital', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
    { id: 5, name: 'Law', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
    { id: 6, name: 'Japanese I', description: 'Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.', },
]

function HomeScreen() {

    return (
        <div className="Container">
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
            <div className='ShortCut bg-gray2 my-5 mx-auto p-10 rounded-lg flex'>
                <div className='p-2 text-center'>
                    <img
                        width={600}
                        src="https://deadline.com/wp-content/uploads/2023/06/MCDFLAS_WB022.jpg"
                        alt="Logo the Flash" />
                    <button className="bg-navy px-4 py-2 rounded-lg text-2xl font-semibold text-white mt-3">CREATE FLASH CARD</button>
                </div>
                <div className='flex-col w-3/5'>
                    <div className='flex justify-center'>
                        <div className='text-3xl font-bold '>
                            My Favourite
                        </div>
                        <div className='text-3xl font-bold  text-red-500'>&nbsp;Flash!!</div>
                    </div>

                    <div>
                        <button className="w-100 bg-blueee px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Classroom</button>
                    </div>
                    <div>
                        <button className="w-100 bg-blueee px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Zoo</button>
                    </div>
                    <div>
                        <button className="w-100 bg-blueee px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Hospiital</button>
                    </div>
                    <div>
                        <button className="w-100 bg-blueee px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">House</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='grid grid-cols-2 w-4/5 m-auto'>
                    {/* <div className='flex'> */}
                        {card.map((item, index) => (
                            <div className="m-3 bg-yellow shadow-md rounded-lg p-6" key={index}>
                                <div className="text-center mt-4">
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <p className="text-gray-600">Total flash</p>
                                    <p className="mt-2">Description : {item.description}</p>
                                </div>
                            </div>
                        ))
                        }
                    {/* </div> */}
                </div>
                {/* <div className='flex-col w-4/5 m-auto'>
                    <div className='flex'>
                        <div className="m-3 bg-yellow shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                        <div className="m-3 bg-yellow shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="m-3 bg-yellow shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                        <div className="m-3 bg-yellow shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
}

export default HomeScreen;
