import { refreshPage } from '../../../utils/window';
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled className='left-side'>
        <Logo className="logo-order-page" onClick={refreshPage}/>
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
    /* background: white; */
    /* padding-left: 20px; */
    display: flex;
    align-items: center;

    .logo-order-page {
      cursor: pointer; 
    }
  
`;
