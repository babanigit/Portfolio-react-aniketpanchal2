
import React from 'react';
import ReactLogo from './components/react-logo/ReactLogo';

import Navbar from './components/1navbar/Navbar';
import Home from './components/2home/Home';
import SocialLinks from './components/3sociallinks/SocialLinks';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    
    
    {/* <p className="text-3xl font-bold  underline">hello</p>
    <p className='font-signature' >hello 2</p>
    <h1>hey there </h1>
      <ReactLogo /> */}
    </>
  );
}

export default App;
