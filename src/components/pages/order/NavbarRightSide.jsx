import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className='right-side'>
        <p>Hey {username}</p>
        <Link to="/">
            <button>Déconnexion</button>
        </Link>
        <BsPersonCircle className="icon"/>
    </NavbarRightSideStyled>
  )
}


const NavbarRightSideStyled = styled.div`
    background: purple;
  
`;
