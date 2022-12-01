import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

const Navbar = () => (
  <div>
    <Menu stackable inverted>
      <Menu.Menu position='left'>
        <Link to='/'>
          <Menu.Item>
            <Icon name='home' />
          </Menu.Item>
        </Link>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Link to='/about'>
          <Menu.Item>
            About
          </Menu.Item>
        </Link>
        <Link to='/photos'>
          <Menu.Item>
            Media
          </Menu.Item>
        </Link>
        <Link to='/contact'>
          <Menu.Item>
            Contact
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  </div>
)

export default Navbar;
