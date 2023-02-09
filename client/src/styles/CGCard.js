import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const CGCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 80vw;
    margin: auto;
    height: 60vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h2 {
    color: ${GLOBAL.purple};
}
p {
    font-size: 1rem;
}
button {
    background-color: ${GLOBAL.teal};
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
}
button:hover {
    font-weight: bold;
}

`

export default CGCard;