import styled from "styled-components";
import { COLORS } from './Colors';

// TO DO: why cant i get ride of the text decoration?? 

const NavBarStyles = styled.div`
    display: flex;
    width: 100vw;
    background-color: ${COLORS.orange};
    img.logo {
        height: 80px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    img.proPic {
        height: 80px;
        background-color: ${COLORS.cream};
        border: 2px solid ${COLORS.teal};
        border-radius: 40px;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .full-nav {
        width: 100vw;
        display: flex;
    }
    .all-links {
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    .links {
        margin: auto;
        text-decoration: none;
        display: flex;
    }
    a {
        margin-left: 20px;
        text-decoration: none;
    }
    a:visited { 
        text-decoration: none;
    } 
    a:hover {
        text-decoration: underline;
    } 
    button {
        height: 30px;
        background-color: ${COLORS.purple};
        border: solid 2px ${COLORS.orange};
        border-radius: 3px;
        color: ${COLORS.cream};
        font-weight: bold;
    }
    p {
        color: ${COLORS.cream};
    }
    `

export default NavBarStyles;