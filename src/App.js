import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Section from "./components/Section";
import dummyText from "./components/DummyText"
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <AboutMe dark={true}/>
            <Resume dark={false}/>
            <Section
                title="Section 4"
                subtitle={dummyText}
                dark={true}
                id="section4"
            />
            <Section
                title="Section 5"
                subtitle={dummyText}
                dark={false}
                id="section5"
            />
        </div>
    );
}

export default App;
