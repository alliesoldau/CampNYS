import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const LoginSignup = styled.div`
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        color: ${GLOBAL.darkgrey}
    }
    h2 {
        color: ${GLOBAL.red};
        font-weight: bold;
        border-bottom: 2px solid;
    }
    input::placeholder {
        color: ${GLOBAL.mediumgrey};
        font-style: italic;
        font-size: .8rem;
    }
    input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
    }
    input:focus {
        outline: none;
    }
    label{      
        margin-top: 10px;
    }
    .radio-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    p.radio {
        color: ${GLOBAL.darkgrey};
        font-size: .9rem;
        margin: auto;
        margin-left: 5px;
    }

`
export default LoginSignup;