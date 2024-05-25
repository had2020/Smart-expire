import React, { useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests

function ButtonComponent() {
    const [dataToSend, setDataToSend] = useState('');  // State for data

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:8080/data', {
                data: dataToSend,  // Send the data in the request body
            });
            console.log(response.data);  // Log response for debugging
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleChange = (event) => {
        setDataToSend(event.target.value);
    };

    return (
        <div>
            <input type="text" value={dataToSend} onChange={handleChange} />
            <button onClick={handleClick}>Send Data</button>
        </div>
    );
}

export default ButtonComponent;
