import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

// components
import FlaskAddress from './components/flaskip';
import ButtonComponent from './components/ButtonComponent';
import Upload_button from './components/upload_button';

function App() {
  const flaskurl = FlaskAddress();
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(flaskurl + '/api/users')
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <h1>Smart Expire</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {array.map((user, index) => (
            <div key ={index}>
              <span>{user}</span><br></br>
            </div>
            ))}
        </p>
      </div>
      <p className="feel-at-home">
        Welcome to Hadrian's site!
      </p>
      <div>
        <ButtonComponent address_var={flaskurl} />
      </div>
      <div>
        <h1>Send an Image</h1>
        <Upload_button address_var={flaskurl} />
      </div>
    </>
  )
}

export default App
