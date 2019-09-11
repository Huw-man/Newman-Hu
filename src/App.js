import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <AboutMe dark={true}/>
            <Resume dark={false}/>
            <Projects dark={true}/>
            <Contact dark={false}/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
