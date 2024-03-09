import React, { useState, useEffect } from 'react';

import '../css/styles.css';


function UpdateScreen() {
    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
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
    useEffect(() => {
        fetchData(5678976567);
    }, []);

    const fetchData = (flashCardId) => {
        const url = `http://54.152.43.129:8000/flash/flashcardset/${flashCardId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Set fetched data to state
                setVocabTranslations(data);
                setTitleValue(data.data.title)
                setDescValue(data.data.description)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // update API
    const handleUpdate = (flashCardId) => {
        const url = `http://54.152.43.129:8000/flash/flashcardset/${flashCardId}`;
        const data = {
            FlashCardId: 5678976567,
            title: titleValue,
            description: descValue,
            data: vocabTranslations
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    console.log("success")
                } else {
                    console.log("fail")
                }
            })
            .catch(error => {
                console.log("fail")
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
            <button className="Button bg-orange-500 px-4 py-2 rounded-lg text-2xl font-semibold text-white mt-10 absolute right-10" onClick={() => handleUpdate(5678976567)}>UPDATE</button>
        </div>
    );
}

export default UpdateScreen;
