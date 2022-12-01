import React from 'react';
import {Segment} from 'semantic-ui-react';

const Home = () => (
  <div className='landing' align='center'>
    <br/>
    <Segment inverted compact align='center' style={{opacity: .85, padding: 65}}>
      <p style={{color: '#FEBE2A', fontSize: 48}}>
        It's a
        <br/>
        String Thing
      </p>
      <p style={{fontSize: 21}}>
        Music School
      </p>
      <hr/>
      <p style={{fontSize: 15}}>
        <br/>
        Music quickens the mind,
        <br/>
        and strengthens the stride!
      </p>
    </Segment>
  </div>
)

export default Home;
