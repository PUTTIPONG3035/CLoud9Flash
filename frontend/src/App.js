import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './screens/Register';
import Profile from './screens/Profile';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register props="index"/> }   />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
       {/* <Register /> */}
       {/* <Profile /> */}
    </div>
  );
}

export default App;
