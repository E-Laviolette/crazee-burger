import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs";
import Input from '../../reusable-ui/Input';
import Button from '../../reusable-ui/Button';

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")
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

    // render
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <Input 
                value={inputValue} 
                onChange={handleChange}
                placeholder={"Entrez votre prénom"} 
                required
                Icon={<BsPersonCircle className="icon" />}
            />

            <Button
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
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid orange;
        margin-bottom: 40px;
    }

    h1 {
        color: white;
        font-size: 40px;
    }

    h2 {
        color: white;
        margin: 20px 10px 10px;
        color: white;
        font-size: 36px;
    }

    

    
`;

// export default LoginFormStyled;
