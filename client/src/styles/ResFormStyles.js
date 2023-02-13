import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const ResFormStyles = styled.div`
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    width: 80vw;
    border: 5px solid ${GLOBAL.lightgrey};
    border-radius: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
}

`

export default ResFormStyles;