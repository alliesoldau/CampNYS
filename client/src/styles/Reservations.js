import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

// background-image: linear-gradient(-60deg, ${GLOBAL.teal} 50%, ${GLOBAL.orange} 50%);

const Reservations = styled.div`

    background: linear-gradient(-45deg, ${GLOBAL.teal}, ${GLOBAL.orange}, ${GLOBAL.purple}, ${GLOBAL.red});
    .header {
        color: white;
        padding: 20px;
        padding-bottom: 0px;
        font-style: italic;
        font-family: 'Josefin';
        letter-spacing: .15em;
        font-size: 20px;
    }
    .reservation-card-container {   
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    } 


`

export default Reservations;