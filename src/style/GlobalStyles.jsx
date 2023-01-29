import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background-color: #302C42;
        @media screen and (max-width: 768px) {
            overflow-y: ${(props) => (props.toggle ? 'hidden' : '')};
        }
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
    }
`
export default GlobalStyles
