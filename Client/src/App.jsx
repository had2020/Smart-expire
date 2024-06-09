import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
//import Not_Found from './pages/Not_Found';
//import ai_tool from './pages/ai_tool';

function App() {
  //const flaskurl = FlaskAddress();
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  
  // get users function 
  const fetchAPI = async () => {
    const response = await axios.get(flaskurl + '/api/users')
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
