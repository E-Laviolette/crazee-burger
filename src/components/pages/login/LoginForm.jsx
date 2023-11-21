import { useState } from 'react'
import styled from 'styled-components';

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
            <input 
            value={inputValue} 
            type="text" 
            placeholder="Entrez votre prénom" 
            onChange={handleChange} 
            required />
            <button>Accéder à mon espace</button>
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

`;

// export default LoginFormStyled;
