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
    input.shrink {
        width: 20%;
    }
    input.shrink-some {
        width: 50%;
    }
    button {
        margin-top: 10px;
    }
    .res-form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-left: 20px;
    }
    .right-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-left: 20px;
    }
    .res-form-submit {

    }
    .buttons-res-form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: auto;
    }
    button.res-form-submit {
        color: white;
        background-color: ${GLOBAL.orange};
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: none;
    }

`

export default Form;