import React, { useState } from 'react';
import "./App.css";

import OutputContainer from './components/OutputContainer';
import InputContainer from './components/InputContainer';

function App() {
  const [userlist, setUserlist] = useState([])
  
  const submitUser = (u)=>{
    setUserlist((prev)=>[u,...prev])
  }
  return (
    <div >
      <InputContainer onSubmitUser={submitUser}/>
      <OutputContainer userlist={userlist}/>
    </div>
  );
}

export default App;
