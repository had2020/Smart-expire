import React, { useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests

function ButtonComponent({ address_var }) {
    const [dataToSend, setDataToSend] = useState('');  // State for data

    const handleClick = async () => {
        if (!address_var) {
            console.error('Address variable is null or undefined');
            return;
        }
        try {
            const response = await axios.post(`${address_var}/api/data`, {
                data: dataToSend,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            console.log(`${address_var}/api/data`);
            if (error.response) {
                console.error('Response:', error.response.data);
            }
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
