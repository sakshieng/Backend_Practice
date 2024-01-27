import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchDataFromBackend } from './getDataBackend';

function App() {
  const [responseData, setResponseData] = useState('');

  const handleGetData = async () => {
    try {
      const data = await fetchDataFromBackend();
      setResponseData(`Response from backend: ${data.message}`);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setResponseData('Error fetching data. Please check the console for details.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleGetData}>Get Data from Backend</button>
        <div>{responseData}</div>
      </header>
    </div>
  );
}

export default App;
