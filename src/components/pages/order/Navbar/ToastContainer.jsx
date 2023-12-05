import React from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';
// import { FaUserSecret } from "react-icons"

export default function ToastContainer(notify) {
    return (
        toast.info("Mode admin activé", {
            // icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
    )
}

const ToastContainerStyled = styled.div`
  
`;



