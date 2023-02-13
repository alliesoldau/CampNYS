import styled from "styled-components";
import { GLOBAL } from './GlobalVar';
import site from '../images/site.jpeg'

// background: url(${site}) no-repeat center;
// background-size: cover;

const SiteCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 400px;
    margin: auto;
    height: auto;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
}
h2 {
    color: ${GLOBAL.teal};
    text-align: center;
    font-size: 4rem;
    margin-bottom: 0px;
    margin-top: 0px;
}
p {
    font-size: 1rem;
}
h3 {
    color: ${GLOBAL.darkgrey};
    margin-top: 0;

}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
}
button {
    color: white;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    border: none;
}
button.edit {
    background-color: ${GLOBAL.purple};
}
button.delete {
    background-color: ${GLOBAL.red};
}
button:hover {
    font-weight: bold;
}
`

export default SiteCard;