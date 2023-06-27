import { useState } from 'react';

const SiteContent = () => {
  const [inputValue, setInputValue] = useState('https://electronjs.org');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const sendDataToMainProcess = () => {
    window.electron.ipcRenderer.send('inputDataUrl', inputValue);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={sendDataToMainProcess}>Send Data</button>
    </>
  );
};

export default SiteContent;
