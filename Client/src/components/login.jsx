import React, { useState } from 'react';

function Login() {
    const [dataToSend, setDataToSend] = useState('');  // State for data

    const handleClick = async () => {
        try {
            const response = await axios.post('http://76.167.195.153:443/api/login', {
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
