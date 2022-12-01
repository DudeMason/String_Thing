import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const PhotoNav = () => (
  <>
    <Menu attached='top' inverted stackable>
      <Link to='/photos'>
        <Menu.Item
          icon='camera'
          name='Photos'
          active={false}
        />
      </Link>
      <Menu.Item
        icon='video'
        name='Videos'
        active={true}
      />
    </Menu>
  </>
  )

export default PhotoNav;
