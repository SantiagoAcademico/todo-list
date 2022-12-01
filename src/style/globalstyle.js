import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  :root{
    --color-purple: #8284FA;
    --color-purple-dark: #5E60CE;
    --color-blue: #4EA8DE;
    --color-blue-dark: #1E6F9F;
    --color-grey-700: #0D0D0D;
    --color-grey-600: #1A1A1A;
    --color-grey-500: #262626;
    --color-grey-400: #333333;
    --color-grey-300: #808080;
    --color-grey-200: #D9D9D9;
    --color-grey-100: #F2F2F2;
    --color-danger: #E25858;
  }

  body{
    background-color: var(--color-grey-600);
    height: 100vh;
    font-family: 'Inter', sem serifa;
  }

  #root{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  

`;

export default GlobalStyle;