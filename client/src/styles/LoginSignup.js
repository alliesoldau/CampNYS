import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const LoginSignup = styled.div`
    display: flex;
    flex-direction: column;
    .form-container {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 33vw;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    h2 {
        color: ${GLOBAL.red};
        font-weight: bold;
        border-bottom: 2px solid;

    }

`
export default LoginSignup;