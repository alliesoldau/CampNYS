import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const ResCard = styled.div`
    .card {
        background-color: white;
        color: ${GLOBAL.darkgrey};
        margin: 20px;
        display: flex;
        flex-direction: row;
        width: auto;
        height: 350px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
        border-radius: 7px;
    }
    .edit-card {
        background-color: white;
        color: ${GLOBAL.darkgrey};
        margin: auto;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        width: 600px;
        height: 350px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
        border-radius: 7px;
        justify-content: space-between;
    }
    .left-container {
        margin: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    img {
        height: 100%;
        border-radius: 0 5px 5px 0;
        border-left: 2px solid ${GLOBAL.mediumgrey};
    }
    .edit-card img {
        height: 350px;
        border-radius: 0 5px 5px 0;
        border-left: 2px solid ${GLOBAL.mediumgrey};
    }
    h4 {
        font-size: 18px;
        color: ${props => 
            props.color === "teal" ? `${GLOBAL.teal}` 
            : props.color === "orange" ? `${GLOBAL.orange}` 
            : props.color === "red" ? `${GLOBAL.red}` 
            : props.color === "purple" ? `${GLOBAL.purple}` 
            : "black"
            };
        font-weight: bolder;
        border-bottom: 2px groove ${props => 
            props.color === "teal" ? `${GLOBAL.teal}` 
            : props.color === "orange" ? `${GLOBAL.orange}` 
            : props.color === "red" ? `${GLOBAL.red}` 
            : props.color === "purple" ? `${GLOBAL.purple}` 
            : `${GLOBAL.lightgrey}`
            };
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
        width: 120px;
        height: 40px;
        border-radius: 20px;
        border: none;
    }
    button:hover {
        font-weight: bold;
    }
    button.edit {
        background-color: ${props => 
            props.color === "teal" ? `${GLOBAL.teal}` 
            : props.color === "orange" ? `${GLOBAL.orange}` 
            : props.color === "red" ? `${GLOBAL.red}` 
            : props.color === "purple" ? `${GLOBAL.purple}` 
            : `${GLOBAL.lightgrey}`
            };
    }
    button.delete {
        background-color: ${GLOBAL.darkgrey};
    }
    button.submit {
        background-color: ${GLOBAL.teal};
    }


`

export default ResCard;