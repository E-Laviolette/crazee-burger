import React from 'react'
import styled from 'styled-components';
import NavbarLeftSide from '../pages/order/NavbarLeftSide';
import NavbarRightSide from '../pages/order/NavbarRightSide';
import { theme } from '../../theme';
import Logo from './Logo';
import { refreshPage } from '../../utils/window';

export default function Navbar({username}) {

    // const {username} = useParams()


  return (
    <NavbarStyled>
        <Logo className="logo-order-page" onClick={refreshPage}/>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    
    .logo-order-page {
      cursor: pointer; 
    }
`;