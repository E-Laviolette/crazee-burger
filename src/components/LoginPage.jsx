import React, { useState } from 'react'

export default function LoginPage() {

    // state
    const [inputValue, setInputValue] = useState("")

    // behavior
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
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>

            <form action="submit" onSubmit={handleSubmit}>
                <input 
                value={inputValue} 
                type="text" 
                placeholder="Entrez votre prénom" 
                onChange={handleChange} 
                required />
                <button>Accéder à votre espace</button>
            </form>
        </div>
    )
}
