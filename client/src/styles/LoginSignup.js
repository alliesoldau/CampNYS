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
    p.radio, select {
        color: ${GLOBAL.darkgrey};
        font-size: .9rem;
        margin: auto;
        margin-left: 5px;
    }
    h3.login {
        color: ${GLOBAL.teal};
        font-weight: bold;
    }
    h3.signup {
        color: ${GLOBAL.red};
        font-weight: bold;
    }
    button.submit {
        color: ${GLOBAL.cream};
        background-color: ${GLOBAL.purple};
        margin: 10px;
        width: 100px;
        margin: auto;
        margin-top: 10px;
    }
`
export default LoginSignup;