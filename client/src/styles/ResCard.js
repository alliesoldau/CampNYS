import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const ResCard = styled.div`
    .card {
        background-color: white;
        color: ${GLOBAL.darkgrey};
        margin: 20px;
        border: 2px solid ${GLOBAL.mediumgrey};
        display: flex;
        flex-direction: row;
        width: auto;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    }
    .left-container {
        margin: auto;
        margin-left: 10px;
        width: 300px;
    }
    img {
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
        font-weight: bold;
    }
    p {
        margin: 5px;
    }

`

export default ResCard;