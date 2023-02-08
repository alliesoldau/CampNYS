import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

// CSS help from source: https://www.youtube.com/watch?v=IF6k0uZuypA&ab_channel=Fireship

const NavBarStyles = styled.div`
    display: flex;
    background-color: white;
    border-bottom: 1px solid ${GLOBAL.lightgrey};
    justify-content: space-between;
    padding: 5px;
    width: 100%;
}
.navbarLeft {
    height: ${GLOBAL.navsize};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 5px;
    list-style: none;
}
h1 {
    margin: 0;
    font-family: "Nunito";
    font-size: 2.2rem;
    color: ${GLOBAL.purple};
}
h4 {
    color: ${GLOBAL.mediumgrey};
    margin-left: 20px;
    margin-top: 20px;
    font-style: italic;
    font-weight: bold;
    font-size: 1.2rem;
}
.logo-full {
    display: flex;
    flex-direction: row;
}
.navbarRight {
    height: calc(${GLOBAL.navsize}*0.9);
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
    align-items: center;
}
.links {
    margin: auto;
    margin-right: 30px;
    font-size: 1.2rem;
}
img.proPic {
    background-color: white;
    border: 3px solid ${GLOBAL.teal};
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 2px 2px ${GLOBAL.cream};
    height: calc(${GLOBAL.navsize}*1);
}
img.logo {
    height: calc(${GLOBAL.navsize}*.9);
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
    width: 200px;
    transform: translateX(-70%);
    background-color: white;
    border: 2px solid ${GLOBAL.teal};
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
    font-weight: bold;
}
a {
    color: ${GLOBAL.teal};
    text-decoration: none;
    font-weight: bold;
}
a:hover {
    color: ${GLOBAL.orange};
}
button#login {
    color: ${GLOBAL.teal};
    background-color: transparent;
    border: none;
}
button#signup {
    color: ${GLOBAL.red};
    background-color: transparent;
    border: none;
}
button.LP:hover {
    text-decoration: underline;
}
button.logout {
    background-color: ${GLOBAL.teal};
    height: 35px;
    width: 100px;
    border: none;
    border-radius: 20px;
    color: ${GLOBAL.cream};
    text-decoration: none;
    font-weight: bold;
}
button:hover {
    background-color: ${GLOBAL.orange};
}

`

export default NavBarStyles;