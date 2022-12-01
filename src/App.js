import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import Videos from './components/shared/media/Videos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/photos' component={Photos}/>
      <Route exact path='/videos' component={Videos}/>
      <Route component={NoMatch} />
    </Switch>
    <div className='watermark'>
      <p align='center' style={{opacity: .5, fontSize: 17, color: 'white'}}>
        <Link to='/' style={{color: 'white'}}>
          <u>It's a String Thing</u>
        </Link>
        <br/>
        <i style={{fontSize: 12}}>
          <Link to='/about'>
            <b style={{color: 'white'}}>-About-</b>
          </Link>
          <br/>
          © 2020 Website Created by Mason Eyre
          <br/>
          <a href='mailto:mason.eyre@icloud.com' style={{color: 'white'}}>
            -mason.eyre@icloud.com-
          </a>
          <br/>
          <a href='https://www.masoneyre.com' target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>
            www.masoneyre.com
          </a>
        </i>
        <br/>
      </p>
    </div>
  </div>
)

export default App;
