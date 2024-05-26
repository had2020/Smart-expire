import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

// components
import ButtonComponent from './components/ButtonComponent';
import ImageUpload from './components/image_upload';


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://76.167.195.153:80/api/users")
    console.log(response.data.users);
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
        <ButtonComponent />
      </div>
      <div>
        <h1>Send an Image</h1>
        <ImageUpload />
      </div>
    </>
  )
}

export default App
