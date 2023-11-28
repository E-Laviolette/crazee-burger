import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../../reusable-ui/Navbar";

export default function OrderPage() {
    // state
    const {username} = useParams()

    // comportements


    // render
    return (
        <div>
            <Navbar />
        </div>
    )
}

const OrderPageStyled = styled.div`
  
`;
