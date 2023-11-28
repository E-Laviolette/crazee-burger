import React from 'react'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Logo from './Logo';
import NavbarLeftSide from '../pages/order/NavbarLeftSide';
import NavbarRightSide from '../pages/order/NavbarRightSide';

export default function Navbar() {

    // const {username} = useParams()


  return (
    <NavbarStyled>
        <NavbarLeftSide />
        <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;

`;