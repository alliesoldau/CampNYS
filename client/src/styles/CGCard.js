import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const CGCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 80vw;
    margin: auto;
    height: 65vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 15px;
    margin-top: 15px;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
h2 {
    color: ${GLOBAL.purple};
}
p {
    font-size: 1rem;
}
.charts {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}
.chart-with-label {
    display: flex;
    flex-direction: column;
    text-align: center;
}
h3 {
    color: ${GLOBAL.darkgrey};
}
.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
button {
    background-color: ${GLOBAL.mediumgrey};
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
}
button:hover {
    font-weight: bold;
}
.pieChart {
    height: 250px;
    width: 250px;
    margin: 10px;
    margin-bottom: 0px;
    margin-top: 0px;
}

`

export default CGCard;