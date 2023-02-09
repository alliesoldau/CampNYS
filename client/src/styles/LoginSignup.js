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
    label {      
        margin-top: 10px;
    }
    .label {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 10px;
    }
    i.gg-mail {
        overflow: hidden;
        transform: scale(var(--ggs,1.1));
        position: relative;
        width: 18px;
        top: 5px;
        border-radius: 2px;
        margin-right: 10px;
    }
    i.gg-lock {
            box-sizing: border-box;
            position: relative;
            display: block;
            transform: scale(var(--ggs,1));
            width: 12px;
            height: 11px;
            border: 2px solid;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom: transparent;
            top: 11px;
            margin-right: 10px;
        }
    i.gg-pen {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: rotate(-45deg) scale(var(--ggs,1));
        width: 14px;
        height: 4px;
        border-right: 2px solid transparent;
        box-shadow:
            0 0 0 2px,
            inset -2px 0 0;
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
        top: 8px;
        left: 3px;
        margin-right: 10px;
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