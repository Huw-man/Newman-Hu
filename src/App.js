import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <AboutMe dark={true}/>
            <Resume dark={false}/>
            <Projects dark={true}/>
            <Contact dark={false}/>
            <Footer dark={false}/>
        </div>
    );
}

export default App;
