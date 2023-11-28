import React from 'react'
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Logo from './Logo';

export default function Navbar() {

    const {username} = useParams()


  return (
    <NavbarStyled>
        <div className="navbarLeft">
            <Logo  className="logo"/>
        </div>
        <div className="user navbarRight">
            <div>
                <p>Hey {username}</p>
                <Link to="/">
                    <button>Déconnexion</button>
                </Link>
            </div>
            <BsPersonCircle className="icon"/>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 100px; */

    .navbarLeft {
        margin-left: 20px;

        .logo {
            display: flex;
            position: left;
    
        }
    }

    .navbarRight {
        margin-right: 70px;

    }
    
    .user {
        display: flex;
        justify-content: center;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: auto;
        width: 36px;
    }
`;