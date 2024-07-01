// src/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import FlaskAddress from '../components/flaskip';
import ButtonComponent from '../components/ButtonComponent';
import Upload_button from '../components/upload_button';
import Nav_bar from '../components/Nav_bar';

// styling
import './styles/Home.css';
const Home = () => {
  const flaskurl = FlaskAddress(); // adding global address for flask
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav_bar></Nav_bar>
      <div>
        <h1 style={{ textAlign: 'center' }}>Smart Expire</h1>

        <div class="box-container">

          <div class="ai-image-expiration-box">  <h2>🤖 The AI Image Expiration Tool</h2>
            <p>
              See when your food expires, based off your receipt. <br />
              Can't remember the expiration date? <br />
              Try our new list of your expiration dates. <br />
              See if your food's expiration date is near. <br />
              And best of all, set up alerts with our app and Chrome extension.
            </p>
            <p style={{ textAlign: 'center' }}><a href="/tool">Click here to get started</a></p>
          </div>
      
          <div class="ai-image-expiration-box">  <h2>🤖 The AI Image Expiration Tool</h2>
            <p>
              See when your food expires, based off your receipt. <br />
              Can't remember the expiration date? <br />
              Try our new list of your expiration dates. <br />
              See if your food's expiration date is near. <br />
              And best of all, set up alerts with our app and Chrome extension.
            </p>
            <p style={{ textAlign: 'center' }}><a href="/tool">Click here to get started</a></p>
          </div>

          <div class="ai-image-expiration-box">  <h2>🤖 The AI Image Expiration Tool</h2>
            <p>
              See when your food expires, based off your receipt. <br />
              Can't remember the expiration date? <br />
              Try our new list of your expiration dates. <br />
              See if your food's expiration date is near. <br />
              And best of all, set up alerts with our app and Chrome extension.
            </p>
            <p style={{ textAlign: 'center' }}><a href="/tool">Click here to get started</a></p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;

/* Todo: use navlink to make navbar and box1 button change based on login status and page status */

/* old send data button code TODO: finish impementation in tool
  <ButtonComponent address_var={flaskurl} />
*/

/* old code to send an image TODO: finish impementation in tool
  <div class="todo">
            <h2>Send an Image</h2>
            <Upload_button address_var={flaskurl} />
          </div>
*/

/* old react test button
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
*/