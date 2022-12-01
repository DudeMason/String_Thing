import React from 'react';
import PhotoNav from './PhotoNav';
import PicViewer from './PicViewer';

const Photos = () => (
  <div className='div' align='center'>
    <br/>
    <div>
      <p className='title'>
        It's a String Thing
      </p>
    </div>
    <PhotoNav/>
    <div className='media'>
      <PicViewer/>
    </div>
  </div>
)

export default Photos;
