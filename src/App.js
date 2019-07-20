import React from 'react';
import logo from './resources/logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Section from "./components/Section";
import dummyText from "./components/DummyText"
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Home/>
      <AboutMe/>
      <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
      />
      <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
      />
      <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
      />
    </div>
  );
}

export default App;
