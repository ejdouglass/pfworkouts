import styled, { css } from 'styled-components';

const color = {
    base: 'hsl(230, 60%, 60%)',
    dark: '',
    blackish: '',
}

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    ${props => props.row && css`
        flex-direction: row;
    `}
    ${props => props.column && css`
        flex-direction: column;
    `}
    ${props => props.centered && css`
        align-items: center;
    `}
    ${props => props.full && css`
        width: 100%;
    `}
`;

export const Button = styled.button`
    width: 100px;
    font-size: 1rem;
    padding: 0.8rem;
    margin: 1rem;
    background-color: ${color.base};
    color: white;
    font-weight: 700;
    border-radius: 6px;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0.8rem;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
`;



