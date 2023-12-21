import React from 'react'
import styled from 'styled-components';
import NavbarLeftSide from './NavbarLeftSide';
import { theme } from '../../../../theme';
import Logo from '../../../reusable-ui/Logo';
import { refreshPage } from '../../../../utils/window';
import NavbarRightSide from './NavbarRightSide';

export default function Navbar() {

    // const {username} = useParams()


  return (
    <NavbarStyled>
        <Logo className="logo-order-page" onClick={refreshPage}/>
        <NavbarRightSide />
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
    border-bottom: 1px solid ${theme.colors.greyLight};

    .logo-order-page {
      cursor: pointer; 
    }
`;