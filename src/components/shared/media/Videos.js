import React from 'react';
import VideoNav from './VideoNav';
import CelloChristmas from './images/CelloChristmas.mp4';
import Beginners from './images/Beginners.mp4';

const Videos = () => (
  <div className='div'>
    <br/>
    <div align='center'>
      <p className='title'>
        It's a String Thing
      </p>
    </div>
    <VideoNav/>
    <div className='media'>
      <video width="460" controls>
        <source src={CelloChristmas} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      <video width="460" controls>
        <source src={Beginners} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
)

export default Videos;
