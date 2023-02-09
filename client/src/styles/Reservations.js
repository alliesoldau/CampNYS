import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

// background-image: linear-gradient(-60deg, ${GLOBAL.teal} 50%, ${GLOBAL.orange} 50%);

const Reservations = styled.div`
    .reservation-card-container {   
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background: linear-gradient(-45deg, ${GLOBAL.teal}, ${GLOBAL.orange}, ${GLOBAL.purple}, ${GLOBAL.red});
    } 


`

export default Reservations;