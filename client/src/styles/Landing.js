import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    h2 {
        color: ${GLOBAL.mediumgrey};
    }
    h3 {
        color: ${GLOBAL.red};
    }
    button {
        height: 35px;
        width: 100px;
        border: none;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        margin: 10px;
        background-color: white;
    }
    button.login {
        color: ${GLOBAL.orange}
    }
    button.signup {
        color: ${GLOBAL.purple};
    }
    button.submit {
        color: ${GLOBAL.cream};
        background-color: ${GLOBAL.teal};

    }


`
export default Landing;