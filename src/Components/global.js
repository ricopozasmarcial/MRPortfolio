import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

 body{
    background-image: ${({ theme }) => theme.back};
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  #footer{
    background-color: ${({ theme }) => theme.body};
  }

  #main {
    background: ${({ theme }) => theme.body};
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  #navtxt, #navtxt2 {
    color: ${({ theme }) => theme.text};
  }
  #navtxt3 {
    color: white;
  }
  #sidebar {
    background: ${({ theme }) => theme.side};
  }
  `