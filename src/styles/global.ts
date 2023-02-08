import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin:0 ;
    box-sizing:border-box ;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #E5E5E5;
}

button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer
}

input {
    font-family: 'Poppins', sans-serif;
}

.react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0 ;
    left: 0;
    display: flex ;
    align-items: center ;
    justify-content: center ;
}

.react-modal {
    width:576px ;
    /* height: 588px ; */
    background-color: white ;
    border-radius: 8px ;
}
`;
