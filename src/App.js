import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });
    try {
      const response = await axios.post('http://34.134.193.25/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
      console.log(files);
      alert(`${files.length} file(s) uploaded.`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;