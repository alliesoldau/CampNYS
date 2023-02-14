import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const ArrowHeader = styled.div`
    .top {
        display: flex;
        flex-direction: row;
    }
    .header {
        display: flex;
        flex-direction: column;
    }
    .arrow {
        margin: 12px;
    }
    h1 {
        color: ${GLOBAL.darkgrey};
        font-size: 1.5rem;
        margin: 20px;
    }
    button {
        width: 150px;
        background-color: ${GLOBAL.teal};
        color: white;
        height: 30px;
        border: none;
        border-radius: 15px;
        margin: 10px;
    }
    button:hover {
        font-weight: bold;
    }
    `

export default ArrowHeader;