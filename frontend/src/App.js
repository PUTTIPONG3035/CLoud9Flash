import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './screens/Register';
import Profile from './screens/Profile';
import CreateScreen from './screens/CreateScreen';
import HomeScreen from './screens/HomeScreen';
import UpdateScreen from './screens/UpdateScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register props="index"/> }   />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateScreen />} />
           <Route path="/home" element={<HomeScreen />} />
            <Route path="/update" element={<UpdateScreen />} />
          
        </Routes>
      </BrowserRouter>
       {/* <Register /> */}
       {/* <Profile /> */}
    </div>
  );
}

export default App;
