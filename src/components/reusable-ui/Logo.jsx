import styled from 'styled-components';

export default function Logo() {

    return (

        <LogoStyled>
            CRAZEE
            <img src="/images/F03 logo-orange.png"></img>
            BURGER
        </LogoStyled>
    )
}


const LogoStyled = styled.div`
    img {
        height: 150px;
        width: 200px;
        object-position: 50 50;
    }
    color: white;
    justify-content: center;
    align-items: center;
`;
