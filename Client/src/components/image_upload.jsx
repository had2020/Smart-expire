import React, { useState, useEffect } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    // Cleanup function to revoke the object URL when the component unmounts
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setSelectedFile(newFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to upload the selected file to your server
    console.log('Uploading file:', selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" />
      )}
      <button type="submit">Send Image</button>
    </form>
  );
}

export default ImageUpload;
