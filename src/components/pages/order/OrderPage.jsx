import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../../reusable-ui/Navbar";

export default function OrderPage() {
    // state
    const {username} = useParams()

    // comportements


    // render
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar />
                {/* <Main /> */}
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 1400px;
    }
`;
