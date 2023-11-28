import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled className='left-side'>
        <Logo />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
    /* background: white; */
    /* padding-left: 20px; */
    display: flex;
    align-items: center;
  
`;
