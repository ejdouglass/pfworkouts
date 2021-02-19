import React, { useContext } from 'react';
import { Context, actions } from '../context/context';
import { useHistory } from 'react-router-dom';
import { Container, Title, Text, Button } from '../components/styled';

const Header = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <Container full centered column style={{height: '100px', backgroundColor: 'darkslateblue', color: 'white'}}>
            <Title>Workout Magic!</Title>
        </Container>
    )
};

export default Header;