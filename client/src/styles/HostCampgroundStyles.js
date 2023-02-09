import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const HostCampgroundStyles = styled.div`
.campground-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5px;
}
h1 {
    color: ${GLOBAL.darkgrey};
    font-size: 1.5rem;
    margin-left: 20px;
}
button.add-campground {
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: ${GLOBAL.darkgrey};
    color: white;
    margin-left: 20px;
}
button:hover {
    font-weight: bold;
}
`

export default HostCampgroundStyles;