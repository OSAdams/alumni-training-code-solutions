// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '../../../../../vite.svg';
import './App.css';
import { CustomButton } from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <>
      <CustomButton text="I" color="purple" />
      <CustomButton text="know" color="blue" />
      <CustomButton text="React" color="gray" />
    </>
  );
}

export default App;
