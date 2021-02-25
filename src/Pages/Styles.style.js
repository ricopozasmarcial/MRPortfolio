import styled from "styled-components";

export const GreenDiv = styled.div`
    background-size: contain;
    background-repeat: repeat;
    z-index:99;
    height: 100vh;
`;

 export const style2 = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    zIndex:"1",
    borderRadius: "0 0 5px 5px",
    border: "0px 1px 1px 1px solid",
  };

  export const lightTheme = {
    body: '#E2E2E2',
    side: '#dbd9d9',
    text: '#363537',
    back: 'linear-gradient(to bottom right, grey, grey, lightgrey)',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  }
  
  export const darkTheme = {
    body: '#363537',
    side: '#525252',
    text: '#FAFAFA',
    back: 'linear-gradient(to bottom right, black, black, grey)',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  }