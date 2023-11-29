import React from 'react'
import styled from 'styled-components';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu)

    return (
        <MenuStyled className="menu">
            
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
        background: purple;
`;