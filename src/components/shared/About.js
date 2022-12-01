import React from 'react';
import {Segment, Container} from 'semantic-ui-react';

const About = () => (
  <div className='div' align='center'>
    <br/>
    <div>
      <p className='title'>
        It's a String Thing
      </p>
    </div>
    <Container>
      <Segment inverted>
        <p align='justify' style={{marginLeft: 50, marginRight: 60}}>
          Hello,
          <br/>
          My name is Rachel, and I've been teaching for over 18 years.
          Most likely you found my website either by pure luck or a link from Thumbtack.
          Please feel free to take a look at my studio webpage, and contact me with any questions.
        </p>
        <ol align='justify' style={{marginLeft: 50, marginRight: 60}}>
          Here are some of the things that I do for my students:
          <li>
            Finding a fully functioning instrument, that stays in tune and keeps
            my students happy enough with the sound, that they have  chance at success.
            This means I will go shopping with you to find the best instrument possible
            for your individual price range. Because after all, it does have to sound decent
            to begin with, but also has to be affordable!
          </li>
          <li>
            Find a time for your weekly lesson with either me, or my associate teachers.
          </li>
          <li>
            Get you ready to play in group lessons as soon as possible.
            Anyone can say all they want is to be a soloist, but in all honesty,
            students must also be able to play with others to become a decent soloist.
            This is why <b>group</b> lessons are such a priority for my students and me.
            Group lessons also become everyone's favorite part
            of taking lessons from my associates and I!
          </li>
        </ol>
      </Segment>
    </Container>
  </div>
)

export default About;
