import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, ${GLOBAL.teal}, ${GLOBAL.orange});
    height: 100vh;
    with: 100vw;
    h4 {
        color: ${GLOBAL.mediumgrey};
        margin-left: 20px;
        margin-top: 20px;
        font-style: italic;
    }
    h3.login {
        color: ${GLOBAL.purple};
        font-weight: bold;
    }
    h3.signup {
        color: ${GLOBAL.red};
        font-weight: bold;
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        padding: 20px;
        border: 2px solid ${GLOBAL.darkgrey};
        border-radius: 10px;
        background-color: white;
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
        background-color: transparent;
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