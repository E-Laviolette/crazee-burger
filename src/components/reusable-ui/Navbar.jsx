import React from 'react'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Logo from './Logo';

export default function Navbar({ username }) {

    // const {username} = useParams()


  return (
    <NavbarStyled>
        Navbar
        <p>Hey {username}</p>
        <Link to="/">
            <button>Déconnexion</button>
        </Link>
        {/* <BsPersonCircle className="icon"/> */}
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`

    background: blue;
    height: 10vh;

`;