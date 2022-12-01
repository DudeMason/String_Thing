import React from 'react';
import {Header} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const NoMatch = () => (
    <div align='center' style={{marginBottom: 200}}>
        <br/>
        <div>
            <p className='title'>
                It's a String Thing
            </p>
        </div>
        <Header as='h2' inverted>404 Error! Page doesn't exist.</Header>
        <Link to='/' style={{fontSize: 19}}><u>Back to Home</u></Link>
    </div>
)

export default NoMatch;
