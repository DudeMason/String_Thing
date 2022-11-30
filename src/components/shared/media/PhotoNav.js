import React from 'react'
import { Menu } from 'semantic-ui-react'

const PhotoNav = () => (
  <>
    <Menu attached='top' tabular inverted stackable>
      <Menu.Item
        icon='camera'
        name='Photos'
        active={true}
      />
      <a href='/videos'>
        <Menu.Item
          icon='video'
          name='Videos'
          active={false}
        />
      </a>
    </Menu>
  </>
  )

export default PhotoNav;
