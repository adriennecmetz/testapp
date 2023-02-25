import React from 'react';
import { Navbar } from 'react-bootstrap';
import Lyrics from './Lyrics';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Speaker_Icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Lyrics App
        </Navbar.Brand>
      </Navbar>
      <Lyrics />
    </>
  );
}

export default App;
