import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


import Navbar from './components/Navbar';

import LandingPage from './components/LandingPage';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Journals from './components/Journals';

function App(){
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Navbar/>
                <div className="main">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/services" component={Services} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact-me" component={Contact} />
                            {/* <Route exact path="/journals" component={Journals} /> */}
                        </Switch>
                </div>
                <Footer/>
            </div>
        </Router> 
    )
}
ReactDOM.render(<App/>,document.getElementById('root')); 