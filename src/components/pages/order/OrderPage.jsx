import { Link, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from 'styled-components';

export default function OrderPage() {
    // state
    const {username} = useParams()

    // comportements


    // render
    return (
        <div>
            <Logo />
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}

const OrderPageStyled = styled.div`
  
`;
