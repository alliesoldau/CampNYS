import styled from "styled-components";
import { COLORS } from './Colors';

const NavBarStyles = styled.div`
    
    display: flex;
    width: 100vw;

    background-color: ${COLORS.purple};
    img {
        height: 80px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    p {
        font-size: 16px;
        line-height: 26px;
        color: var(--blue);
        margin: 5px;
        vertical-align: center;
        }
    .full-nav {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }
    `

export default NavBarStyles;