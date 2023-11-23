import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import PasswordInput from '../../reusable-ui/PasswordInput';
import { theme } from '../../../theme';

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate() 
    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("")
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value)
    // }

    // render
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput 
                value={inputValue} 
                onChange={handleChange}
                placeholder={"Entrez votre prénom"} 
                required
                Icon={<BsPersonCircle className="icon" />}
            />
            {/* <PasswordInput 
                value={password}
                onChange={handleChangePassword}
                placeholder={"Entrez votre mot de passe"}
                required
                Icon={<RiLockPasswordLine className="icon" />}
            /> */}
            <PrimaryButton
                label={"Accéder à votre espace"}
                Icon={<IoChevronForward className="icon" />}    
            />
        </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid ${theme.colors.primary};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P4};
    }
  
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.P0};
        margin-left: 10px;
    }
    
`;