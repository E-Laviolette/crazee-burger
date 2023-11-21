import React, { useState } from 'react'
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
            <br />
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

const LoginFormStyled = styled.form`
    color: white;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    h1 {
        font-family: '', sans-serif;
    }




`;

// export default LoginFormStyled;
