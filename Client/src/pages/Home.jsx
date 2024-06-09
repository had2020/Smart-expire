// src/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import FlaskAddress from '../components/flaskip';
import ButtonComponent from '../components/ButtonComponent';
import Upload_button from '../components/upload_button';

const Home = () => {
  const flaskurl = FlaskAddress(); // adding global address for flask
  const [count, setCount] = useState(0);
  const array = ["User1", "User2", "User3"]; // Example array

  return (
    <>
      <h1>Smart Expire</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          {array.map((user, index) => (
            <div key={index}>
              <span>{user}</span><br />
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
      <div>
        <Link to="/response">Go to Response Page</Link>
      </div>
    </>
  );
}

export default Home;