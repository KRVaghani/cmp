import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
            <Link to='/'>Home</Link>
            
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background: #192734;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
    
    .Link {
        text-decoration: none;
    }
    
`