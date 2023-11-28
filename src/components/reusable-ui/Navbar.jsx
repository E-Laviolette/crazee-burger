import React from 'react'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Logo from './Logo';

export default function Navbar({ username }) {

    // const {username} = useParams()


  return (
    <NavbarStyled>
        <div className='left-side'>
            <Logo />
        </div>
        <div className='right-side'>
            <p>Hey {username}</p>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
            <BsPersonCircle className="icon"/>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    
    .left-side {
        background: pink
    }

    .right-side {
        background: purple
    }
`;