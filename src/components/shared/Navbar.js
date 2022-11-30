import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';

const Navbar = () => (

  <div>
    <Menu stackable inverted>
      <Menu.Menu position='left'>
        <a href='/'>
          <Menu.Item>
            <Icon name='home' />
          </Menu.Item>
        </a>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <a href='/about'>
          <Menu.Item>
            About
          </Menu.Item>
        </a>
        <a href='/photos'>
          <Menu.Item>
            Media
          </Menu.Item>
        </a>
        <a href='/contact'>
          <Menu.Item>
            Contact
          </Menu.Item>
        </a>
      </Menu.Menu>
    </Menu>
  </div>
)

export default Navbar;
