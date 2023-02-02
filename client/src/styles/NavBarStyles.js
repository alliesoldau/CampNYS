import styled from "styled-components";
import { GLOBALVAR } from './GlobalVar';


const NavBarStyles = styled.div`
    display: flex;
    background-color: ${GLOBALVAR.orange};
    border-bottom: 2px solid ${GLOBALVAR.purple};
    justify-content: space-between;
}
.navbar {
    max-width: 100%;
    height: height: ${GLOBALVAR.navsize};
    display: flex;
    margin: 0;
    padding: 5px;
    list-style: none;
}
img.proPic {
    background-color: ${GLOBALVAR.cream};
    border: 2px solid ${GLOBALVAR.teal};
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 2px 2px ${GLOBALVAR.cream};
    height: calc(${GLOBALVAR.navsize}*0.9);
}
img.logo {
    height: calc(${GLOBALVAR.navsize}*0.9);
}
.nav-item {
    width: calc(${GLOBALVAR.navsize}*0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
}
.nav-item:hover {
    filter: brightness(1.2);
}
.dropdown {
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: ${GLOBALVAR.cream};
    border: 2px solid ${GLOBALVAR.teal};
    border-radius: 5px;
    overflow: hidden;
    padding: 1rem;
}
.menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background 300ms;
    padding: 0.5rem;
}
.menu-item:hover {
    border: 2px solid ${GLOBALVAR.teal};
    background-color: ${GLOBALVAR.orange};
    border-radius: 5px;
    filter: brightness(1)
}
a {
    color: ${GLOBALVAR.purple};
    text-decoration: none;
    font-weight: bold;
}
a:hover {
    color: black;
}



`

export default NavBarStyles;