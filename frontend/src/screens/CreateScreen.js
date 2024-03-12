import React, { Fragment, useState } from 'react';
import { IconUserSquareRounded, IconSquareRoundedX, IconSquareRoundedArrowLeft, IconSquareRoundedArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import '../css/styles.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



function CreateScreen() {
      const navigate = useNavigate();
      const randomId = uuidv4();
    const [titleValue, setTitleValue] = useState('Title Flash Card');
    const [descValue, setDescValue] = useState('Description of your flash card');
    const [numBox, setNumBox] = useState(5)
    const [vocabTranslations, setVocabTranslations] = useState([]);

    const handleChangeTitle = (event) => {
        setTitleValue(event.target.value);
    };
    const handleChangeDesc = (event) => {
        setDescValue(event.target.value);
    };
    const handleAddInputBox = () => {
        setNumBox(prevNumBox => prevNumBox + 1);
    };
    const handleCreate = () => {
        console.log("handleCreate")
        const data = {
            FlashCardId: randomId,
            title: titleValue,
            description: descValue,
            data: vocabTranslations
        };

        // Example of sending a POST request using fetch API
       axios.post('http://52.204.195.112:3000/flashcardset', data)
            .then(response => {
                console.log("success");
                   navigate('/home');
                
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    const handleVocabChange = (index, value) => {
        const updatedVocabTranslations = [...vocabTranslations];
        updatedVocabTranslations[index] = { vocab: value };
        setVocabTranslations(updatedVocabTranslations);
    };

    const handleTranslationChange = (index, value) => {
        const updatedVocabTranslations = [...vocabTranslations];
        updatedVocabTranslations[index] = { ...updatedVocabTranslations[index], translation: value };
        setVocabTranslations(updatedVocabTranslations)
    };


    return (
        <div className='mb-40'>
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
            <div className="Tilte-box bg-blue-500 px-10 py-6 text-2xl font-semibold text-gray-800">
                <input className="Tilte-input bg-blue-500 w-full py-2 px-4 border border-gray-400 rounded-md text-2xl font-semibold text-gray-800"
                    type="text"
                    value={titleValue}
                    onChange={handleChangeTitle}
                />
                <br />
                <textarea className="Detail-input bg-blue-500 w-full h-max px-10 py-6 border border-gray-400 rounded-md text-lg text-gray-800 resize-none"
                    rows={4}
                    value={descValue}
                    onChange={handleChangeDesc}
                />
            </div>
            <table className="Flash-container w-80 mx-auto">
                <thead>
                    <tr>
                        <th className="text-2xl">คำศัพท์</th>
                        <th className="text-2xl">คำแปล</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: numBox }, (_, index) => (
                        <tr key={index}>
                            <td>
                                <input className="Vocab-input bg-gray-200 w-full p-4 rounded-lg text-xl font-semibold text-gray-800"
                                    type="text"
                                    placeholder="Vocabulary"
                                    onChange={(e) => handleVocabChange(index, e.target.value)}
                                />
                            </td>
                            <td>
                                <input className="Trans-input bg-gray-200 w-full p-4 rounded-lg text-xl font-semibold text-gray-800"
                                    type="text"
                                    placeholder="Translation"
                                    onChange={(e) => handleTranslationChange(index, e.target.value)}
                                />
                                <input className="Upload-file bg-gray-700 text-white py-4 px-6 rounded-b-lg text-xl font-semibold cursor-pointer"
                                    type="file"
                                />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2"><button className="m-auto bg-yellow-500 w-12 h-12 rounded-full text-white text-5xl font-bold" onClick={handleAddInputBox}>+</button></td>
                    </tr>
                </tbody>
            </table>
            <button className="Button bg-red-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white mt-10 absolute left-10">CANCEL</button>
            <button className="Button bg-orange-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white mt-10 absolute right-10" onClick={handleCreate}>CREATE</button>
        </div>
    );
}

export default CreateScreen;
