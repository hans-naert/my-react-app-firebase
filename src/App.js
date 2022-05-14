import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { app } from './firebase';
import { getDatabase, ref, get, set, child } from "firebase/database";





function App() {
  function Set() {
    console.log('Clicked');
    const db = getDatabase();

    let userId = 1;
    let name = "test"
    let email = "test@test.com";
    let imageUrl = "http://test.com/test.jpg";

    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }
  function Get() {
    console.log('Clicked');

    const dbRef = ref(getDatabase());
    let userId = 1;
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setDbInfo(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  const [dbInfo, setDbInfo] = useState('');
  return (
    <div>
      <Button variant="contained" onClick={Set}>SET</Button>
      <Button variant="contained" onClick={Get}>GET</Button>
      <div>
        {JSON.stringify(dbInfo)}
      </div>
    </div>);
}


export default App;
