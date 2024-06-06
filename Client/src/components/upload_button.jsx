import React, { useState } from 'react';
import axios from 'axios';

const Upload_button = ({ address_var }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }
    if (!address_var) {
      console.error('Address variable is null or undefined');
      return;
    }
    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.post(`${address_var}/api/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        console.log('Image uploaded successfully:', response.data);
      }).catch(error => {
        console.error('Error uploading image:', error);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return ( 
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
      <button type="submit" disabled={!file || !address_var}>Upload Image</button>
    </form>
  );
};

export default Upload_button;