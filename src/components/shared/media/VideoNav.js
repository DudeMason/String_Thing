import React from 'react'
import { Menu } from 'semantic-ui-react'

const PhotoNav = () => (
  <>
    <Menu attached='top' tabular inverted stackable>
      <a href='/photos'>
        <Menu.Item
          icon='camera'
          name='Photos'
          active={false}
        />
      </a>
      <Menu.Item
        icon='video'
        name='Videos'
        active={true}
      />
    </Menu>
  </>
  )

export default PhotoNav;
