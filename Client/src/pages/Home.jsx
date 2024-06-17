// src/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import FlaskAddress from '../components/flaskip';
import ButtonComponent from '../components/ButtonComponent';
import Upload_button from '../components/upload_button';
import Nav_bar from '../components/Nav_bar';

const Home = () => {
  const flaskurl = FlaskAddress(); // adding global address for flask
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav_bar></Nav_bar>
      <h1>Smart Expire</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
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
  );
}

export default Home;