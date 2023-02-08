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

`
export default LoginSignup;