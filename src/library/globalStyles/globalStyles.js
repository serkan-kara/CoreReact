import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* 
        for now as mentioned in styled-components' documents   
        we will not import fonts via global styles instead we import fonts in index.html file
        https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle
    */

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    .editor-paragraph {
        padding: 0;
        margin: 0;
    }

    html {
        height: 100vh;
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${props => props.theme.colors.white};
        font-family: ${props => props.theme.fonts.general};
        font-size: 1.5rem;
    }
    ul {
        padding-inline-start: 0;
    }
    ul li {
        list-style: none;
    }
    
    img {
        //https://stackoverflow.com/questions/10426786/div-gets-extra-height-for-no-reason/10426847
        display: block;
    }
`;

export default GlobalStyle;