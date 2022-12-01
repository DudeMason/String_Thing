import React from 'react';
import {Segment, Icon} from 'semantic-ui-react'

const Contact = () => (
  <div className='div' align='center'>
    <br/>
    <div>
      <p className='title'>
        It's a String Thing
      </p>
    </div>
    <Segment inverted compact style={{marginTop: 100, marginBottom: 100, padding: 50}}>
      <h2>
        <strong>Contact</strong>
      </h2>
      <br/>
      <p align='center' style={{fontSize: 17}}>
        Rachel Harris — Owner
      </p>
      <p>
        <a href='mailto:racheljh5514@gmail.com' target='_blank' rel="noopener noreferrer">
            <u>racheljh5514@gmail.com</u>
        </a>
        <br/>
        <br/>
        <a href='https://www.facebook.com/cellobabe18' target='_blank' rel="noopener noreferrer">
          <Icon name='facebook' size='big'/>
        </a>
      </p>
    </Segment>
  </div>
)

export default Contact;
