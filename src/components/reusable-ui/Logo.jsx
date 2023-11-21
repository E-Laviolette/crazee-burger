import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo() {

    return (

        <LogoStyled>
            <h1>CRAZEE</h1>
            <img className="backgroundColor: black;" src="/images/logo-orange.png" alt="Logo"></img>
            <h1>BURGER</h1>
        </LogoStyled>
    )
}


const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    transform: scale(2.5);
    border: 1px solid red;
    background-color: transparent;

    h1 {
        display: inline;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: 36px;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }

    img {
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;
    }
`;
