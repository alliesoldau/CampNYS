import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    h4 {
        color: ${GLOBAL.mediumgrey};
    }
    h3.login {
        color: ${GLOBAL.purple};
    }
    h3.signup {
        color: ${GLOBAL.red};
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        height: 100%;
        padding-top: 35px;
        justify-content: center;
    }
    button {
        height: 35px;
        width: auto;
        border: none;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        background-color: white;
    }
    button.login {
        color: ${GLOBAL.purple}
    }
    button.signup {
        color: ${GLOBAL.red};
    }
    button.submit {
        color: ${GLOBAL.cream};
        background-color: ${GLOBAL.teal};
        margin: 10px;
        width: 100px;

    }


`
export default Landing;