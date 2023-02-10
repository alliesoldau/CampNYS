import styled from "styled-components";
import { GLOBAL } from './GlobalVar';
import site from '../images/site.jpeg'

const SiteCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 400px;
    margin: auto;
    height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background: url(${site}) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    text-shadow: 0px 0px 2px black;

}
h2 {
    color: white;
}
p {
    font-size: 1rem;
}
h3 {
    color: ${GLOBAL.lightgrey};
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
}
button {
    background-color: ${GLOBAL.orange};
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

export default SiteCard;