import styled from "styled-components";
import { GLOBALVAR } from './GlobalVar';

// CSS help from source: https://www.youtube.com/watch?v=IF6k0uZuypA&ab_channel=Fireship

const NavBarStyles = styled.div`
    display: flex;
    background-color: white;
    border-bottom: 1px solid ${GLOBALVAR.lightgrey};
    justify-content: space-between;
    padding: 5px;
}
.navbarLeft {
    height: ${GLOBALVAR.navsize};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 5px;
    list-style: none;
}
h1 {
    margin: 0;
}
.logo-full {
    display: flex;
    flex-direction: row;
}
.navbarRight {
    height: ${GLOBALVAR.navsize};
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    align-items: center;
}
.links {
    margin: auto;
    margin-right: 30px;
}
img.proPic {
    background-color: white;
    border: 2px solid ${GLOBALVAR.orange};
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 2px 2px ${GLOBALVAR.cream};
    height: calc(${GLOBALVAR.navsize}*0.9);
}
img.logo {
    height: calc(${GLOBALVAR.navsize}*0.9);
}
.logo-full {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
}
.logo-full:hover {
    filter: brightness(1.2);
}
.proPic:hover {
    filter: brightness(1.2);
}
.dropdown {
    position: absolute;
    top: 68px;
    width: 300px;
    transform: translateX(-45%);
    background-color: white;
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