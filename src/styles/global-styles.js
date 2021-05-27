import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:400,500,700&display=swap');
    body {
        margin: 0;
        padding: 0;
    }
    @keyframes oddsFadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    .odds-fade-in{
        animation: oddsFadeIn;
        animation-delay: 200ms;
        animation-fill-mode: backwards;
        animation-duration: 600ms;
        opacity: 1;
    }
`;
export default GlobalStyle;
