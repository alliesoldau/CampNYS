import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const CGDetailsCard = styled.div`
    .header {
        display: flex;
        flex-direction: row;
    }
    .arrow {
        margin: 12px;
    }
    h1 {
        color: ${GLOBAL.darkgrey};
        font-size: 1.5rem;
        margin-left: 20px;
    }
    .card {
        background-color: white;
        color: ${GLOBAL.darkgrey};
        margin: 20px;
        display: flex;
        flex-direction: row;
        width: 700px;
        height: 350px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
        border-radius: 7px;
        justify-content: space-between;
    }
    .left-container {
        margin: 10px;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right-container {
        heiht: 100%;
    }
    .card img {
        width: 350px;
        height: 100%;
        border-radius: 0 5px 5px 0;
        border-left: 2px solid ${GLOBAL.mediumgrey};
    }
    h4 {
        font-size: 18px;
        color: ${GLOBAL.teal};
        font-weight: bolder;
        border-bottom: 2px groove ${GLOBAL.teal};
        text-align: flex-start;
        padding-bottom: 5px;
    }
    p {
        margin: 5px;
        color: black;
        font-size: 16px;
        margin-bottom: 10px;
    }
    span {
        color: ${GLOBAL.darkgrey};
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    button {
        color: white;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        border: none;
        margin: 2px;
    }
    button:hover {
        font-weight: bold;
    }
    button.edit {
        background-color: ${GLOBAL.orange};
    }
    button.delete {
        background-color: ${GLOBAL.red};
    }
    button.sites {
        background-color: ${GLOBAL.teal};
    }


`

export default CGDetailsCard;