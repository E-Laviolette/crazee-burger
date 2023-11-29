import { Link } from 'react-router-dom'

const DisplayOrder = () => {
    return (

        <div>
            <h1>ErrorPage</h1>
            <button >
                <Link onClick="DisplayOrder" to="/order"></Link>
            </button>
        </div>
    )
}

export default DisplayOrder;