import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ address_var }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile); // Add file to FormData

    try {
      const response = await axios.post({address_var} + '/data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file uploads
        },
      });
      console.log('File upload response:', response);

      // Handle successful upload (e.g., display success message)
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);

      // Handle upload errors (e.g., display error message)
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default ImageUpload;
