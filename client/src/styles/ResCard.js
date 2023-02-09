import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const ResCard = styled.div`
    .card {
        background-color: ${GLOBAL.lightgrey};
        margin: 20px;
        border: 3px solid ${GLOBAL.purple};
        display: flex;
        flex-direction: row;
        width: 600px;
    }

    img {
        height: 350px;
    }

`

export default ResCard;