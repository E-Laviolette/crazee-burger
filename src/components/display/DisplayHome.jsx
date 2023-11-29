import { Link } from 'react-router-dom'

const DisplayHome = () => {
    return (

        <div>
            <h1>ErrorPage</h1>
            <button >
                <Link onClick="DisplayHome" to="/">Retour à la page d'accueil</Link>
            </button>
        </div>
    )
}

export default DisplayHome;