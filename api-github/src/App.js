import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';


function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    axios.get('https://api.github.com/users/OtavioFalcaof')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div >
      {info ? (
        <div>
          <h1>{info.login}</h1>
          <p>{info.bio}</p>
          <img src={info.avatar_url} alt="foto do perfil no github" />
        </div>
      ) : null}
    </div>
  );
};

export default App;