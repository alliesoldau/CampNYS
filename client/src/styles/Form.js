import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Form = styled.div`
    font-size: 16px;
    padding: 5px;
    label {
        color: black;
    }
    input {
        color: ${GLOBAL.darkgrey};
    }
    .line-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    button {
        margin-top: 10px;
    }
`

export default Form;