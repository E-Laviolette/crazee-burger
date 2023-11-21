import { useState } from 'react'
import LoginForm from './LoginForm';
import Logo from '../../reusable-ui/Logo';
import styled from 'styled-components';

export default function LoginPage() {

    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    background-image: url("/images/F03 burger-background.jpg");
    background-size: 100% 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;