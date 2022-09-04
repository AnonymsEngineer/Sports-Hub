import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 
const App = () => {
  const pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

  return (
    <div>
    <Router>
    <Navbar />
    <LoadingBar height={2} color='red' progress={progress} />
    <Routes>
      <Route exact index element={<News setProgress={setProgress} apikey={apikey} country="in" pageSize={pageSize} />} />
    </Routes>
    
    <Routes>
      <Route exact path="/Australia" element={<News setProgress={setProgress} apikey={apikey} country="au" pageSize={pageSize} />} />
    </Routes>
    
    <Routes>
      <Route exact path="/Canada" element={<News setProgress={setProgress} apikey={apikey} country="ca" pageSize={pageSize} />} />
    </Routes>
    
    <Routes>
      <Route exact path="/New_Zealand" element={<News setProgress={setProgress} apikey={apikey} country="nz" pageSize={pageSize} />} />
    </Routes>
    
    <Routes>
      <Route exact path="/Nigeria" element={<News setProgress={setProgress} apikey={apikey} country="ng" pageSize={pageSize} />} />
    </Routes>

    <Routes>
      <Route exact path="/Philippines" element={<News setProgress={setProgress} apikey={apikey} country="ph" pageSize={pageSize} />} />
    </Routes>

    <Routes>
      <Route exact path="/Saudi_Arabia" element={<News setProgress={setProgress} apikey={apikey} country="sa" pageSize={pageSize} />} />
    </Routes>

    <Routes>
      <Route exact path="/South_Africa" element={<News setProgress={setProgress} apikey={apikey} country="za" pageSize={pageSize} />} />
    </Routes>

    <Routes>
      <Route exact path="/UK" element={<News setProgress={setProgress} apikey={apikey} country="gb" pageSize={pageSize} />} />
    </Routes>
    
    <Routes>
      <Route exact path="/USA" element={<News setProgress={setProgress} apikey={apikey} country="us" pageSize={pageSize} />} />
    </Routes>
    </Router>
    </div>
  )
 }

 export default App