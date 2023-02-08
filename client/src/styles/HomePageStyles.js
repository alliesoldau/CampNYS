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
    p {
        font-family: 'Josefin';
    }
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
        background-color: rgba(255, 255, 255, .4);  
        backdrop-filter: blur(5px);       
        margin: 30px;
        width: 25vw;
        border-radius: 4px;
        padding: 10px;
    }
    .left-container {
        display: flex;
        flex-direction: column;
    }
    .top-left {
        height: auto;
    }
    .top-left h4{
        color: ${GLOBAL.purple};
        text-shadow: 1px 1px 3px ${GLOBAL.cream};
    }
    .top-left p {
        font-style: italic;
        color: ${GLOBAL.darkgrey};
    }
    .motto p{
        margin-bottom: 0px;
    }
    .bottom-left {
        height: 100%;
    }

    .bottom-left h4{
        color: ${GLOBAL.red};
        text-shadow: 1px 1px 1px ${GLOBAL.cream};
    }

    .right-container h4{
        color: ${GLOBAL.teal};
        text-shadow: 1px 1px 3px ${GLOBAL.cream};

    }
`

export default HomePageStyles;