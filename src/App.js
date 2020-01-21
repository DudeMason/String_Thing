import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/shared/Home';
import Contact from './components/shared/Contact';
import About from './components/shared/About';
import Photos from './components/shared/media/Photos';
import Videos from './components/shared/media/Videos';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

const App = () => (

  <div className='background'>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/photos' component={Photos}/>
      <Route exact path='/videos' component={Videos}/>
      <Route component={NoMatch} />
    </Switch>
    <br/>
    <p align='center' style={{opacity: .5, fontSize: 17, color: 'white'}}>
      <u>It's a String Thing</u>
      <br/>
      <i style={{fontSize: 12}}>
        Owner: Rachel Harris
        <br/>
          <Link to='/about'>
            <b style={{color: 'white'}}>-About-</b>
          </Link>
        <br/>
        -Rachel's email-
      </i>
      <br/>
    </p>
  </div>
)

export default App;
