import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
        line-height: 1.5;
    }
    body{
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background-color: #302C42;
        @media screen and (max-width: 768px) {
            overflow-y: ${(props) => (props.toggle ? 'hidden' : '')};
        }
    }
    main{
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding: 0 6rem;
        @media screen and (max-width: 1280px) {
            padding: 0 3rem;
        }
        @media screen and (max-width: 1080px) {
            padding: 0 1.5rem;
        }
        @media screen and (max-width: 480px) {
            padding: 0 1rem;
        }
    }
    input, textarea{
        font-family: 'Montserrat', sans-serif;
    }
    input:focus, textarea:focus{
    outline: none;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
        color: #e3e3e3;
    }
    ul{
        list-style: none;
    }
    p{
        color: white;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        border: none;
        outline: none;
    }
`
export default GlobalStyles
