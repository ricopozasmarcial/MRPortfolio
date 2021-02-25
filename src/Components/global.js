import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

 #back{
    background-image: ${({ theme }) => theme.back};
  }

  #footer{
    background-color: ${({ theme }) => theme.body};
  }

  #main {
    background: ${({ theme }) => theme.body};
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