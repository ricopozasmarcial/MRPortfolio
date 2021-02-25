import styled from "styled-components";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GmailIcon from '@material-ui/icons/Email';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export const GreenDiv = styled.body`
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index:99;
    `;

 export const style2 = {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
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

  export const socialSideBar = {
    title: 'Social',
    social: [
      { name: 'GitHub', icon: GitHubIcon , link: 'https://github.com/ricopozasmarcial' },
      { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/marchute99' },
      { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
      { name: 'Email', icon: GmailIcon, link: 'mailto:marshall6399@gmail.com' },
    ],
  };

  export const resourcesSideBar = {
    title: 'Resources',
    social: [
      { name: 'Download Curriculum Vitae', icon: DownloadIcon , link: 'CV_Rico-Pozas-Marcial.pdf' },
      { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
    ],
  };