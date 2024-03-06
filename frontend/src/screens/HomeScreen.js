import React from 'react';

// import '../css/styles.css';
import '../css/landing.css';


function HomeScreen() {

    return (
        <div className="Container">
            <div className='bg-gray-900 p-3 flex flex-row'>
                <img
                    width={300}
                    src="https://cdn.discordapp.com/attachments/1209860446648147968/1209860514029637632/image.png?ex=65e87568&is=65d60068&hm=e987326fcfdc882239c906839f5a6eb46484f1c2dc30ba2b30a7135ffb11fa10&"
                    alt="Logo the Flash" />
                <div className="text-gray-100 flex-1">
                    How to play
                </div>
                <div>
                    <img
                        className="order-last w-11"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Logo the Flash" />
                </div>
            </div>
            <div className='ShortCut bg-red-300 my-3 mx-auto p-10 rounded-lg flex'>
                <div className='p-2'>
                    <img
                        width={600}
                        src="https://deadline.com/wp-content/uploads/2023/06/MCDFLAS_WB022.jpg"
                        alt="Logo the Flash" />
                    <button className="bg-blue-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white mt-3 ">CREATE Flash Card</button>
                </div>

                <div className='flex-col w-3/5 '>
                    <div>
                        <button className="w-100 bg-green-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Fav Flash Card</button>
                    </div>
                    <div>
                        <button className="w-100 bg-green-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Fav Flash Card</button>
                    </div>
                    <div>
                        <button className="w-100 bg-green-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Fav Flash Card</button>
                    </div>
                    <div>
                        <button className="w-100 bg-green-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white m-2 mx-3 w-full">Fav Flash Card</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>

                <div className='flex-col w-4/5 m-auto'>
                    <div className='flex'>
                        <div className="m-3 bg-yellow-100 shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                        <div className="m-3 bg-yellow-100 shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="m-3 bg-yellow-100 shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                        <div className="m-3 bg-yellow-100 shadow-md rounded-lg p-6">
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-bold">Title Flash Card</h2>
                                <p className="text-gray-600">Total flash</p>
                                <p className="mt-2">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero eget tellus ultricies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeScreen;
