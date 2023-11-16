import { useState } from "react"

function App() {
    // state
    const [nouveauPrenom, setNouveauPrenom] = useState("")

    // comportement
    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const prenom = nouveauPrenom
        alert(`Bonjour : ${prenom}`)
        setNouveauPrenom("")

    }

    
    // render
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h3>Connectez-vous</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="prenom" placeholder="Entrez votre prénom" onChange={handleChange} required/>
                <button onClick={handleSubmit}>Accéder à votre espace</button>
            </form>

        </div>
    )
}

export default App
