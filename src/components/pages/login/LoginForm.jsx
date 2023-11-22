import { useState } from 'react'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour : ${inputValue}`)
        setInputValue("")
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
            <div className="input-with-icon">
                <BsPersonCircle className="icon"/>
                <input
                value={inputValue}
                type="text"
                placeholder="Entrez votre prénom"
                onChange={handleChange}
                required />
            </div>
            <div className="button-container">
                <button>Accéder à mon espace</button>
            </div>
        </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
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

    .input-with-icon {
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px;

        .icon {
            font-size: 15px;
            margin-right: 8px;
            color: #93a2b1;
        }
        
        input {
            font-size: 15px;
            margin-right: 8px;
            border: none;
        }

        &::placeholder {
            background: white;
            color: lightgrey;
        }


    }

`;

// export default LoginFormStyled;
