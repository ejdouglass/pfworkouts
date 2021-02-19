import React, { useContext } from 'react';
import { Context, actions } from '../context/context';
import { useHistory } from 'react-router-dom';
import { Container, Text } from '../components/styled';

const Alert = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <Container>
            
        </Container>
    )
};

export default Alert;