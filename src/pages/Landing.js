import React, { useContext } from 'react';
import { Context, actions } from '../context/context';
import { useHistory } from 'react-router-dom';
import { PageContainer, Container, Title, Text, Button } from '../components/styled';

const Landing = (props) => {
    const [state, dispatch] = useContext(Context);

    return (
        <PageContainer>
            <Title>Welcome Home</Title>
            <Button>Boop</Button>
        </PageContainer>
    )
};

export default Landing;