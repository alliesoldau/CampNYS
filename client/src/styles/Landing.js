import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    
    button {
        background-color: ${GLOBAL.teal};
        height: 35px;
        width: 100px;
        border: none;
        border-radius: 20px;
        color: ${GLOBAL.cream};
        text-decoration: none;
        font-weight: bold;
        margin: 10px;
    }

    button.signup {
        background-color: ${GLOBAL.purple};
    }
    button.submit {
        background-color: ${GLOBAL.orange};
    }


`
export default Landing;