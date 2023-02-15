import styled from "styled-components";
import { GLOBAL } from './GlobalVar';
import cairn from '../images/cairn.jpeg'

// CSS help from source: https://www.youtube.com/watch?v=IF6k0uZuypA&ab_channel=Fireship

const HomePageStyles = styled.div`
    height: calc(100vh - ${GLOBAL.navsize});
    width: 100vw;
    background: url(${cairn}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    .homepage-container {
        height: calc(100vh - ${GLOBAL.navsize});
        width: 100vw;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 1;
    }
    .right-container, .top-left, .bottom-left {
        background-color: white;     
        margin: 30px;
        width: 25vw;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    h4 {
        font-size: 1.5rem;
        margin: 10px;
    }
    p {
        font-size: 16px;
        margin: 15px;
    }
    .left-container {
        display: flex;
        flex-direction: column;
    }
    .top-left {
        height: auto;
    }
    .top-left h4{
        color: ${GLOBAL.red};
        text-shadow: 1px 1px 3px ${GLOBAL.lightgrey};
    }
    .top-left p {
        font-style: italic;
        color: ${GLOBAL.darkgrey};
        font-family: 'Josefin';
    }
    .motto p{
        margin-bottom: 0px;
    }
    .bottom-left {
        height: 100%;
    }

    .bottom-left h4{
        color: ${GLOBAL.purple};
        text-shadow: 1px 1px 1px ${GLOBAL.lightgrey};
    }

    .right-container h4{
        color: ${GLOBAL.teal};
        text-shadow: 1px 1px 3px ${GLOBAL.lightgrey};
    }

    .logo-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .logo-container img {
        width: 25%;
    }
`

export default HomePageStyles;