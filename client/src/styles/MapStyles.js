import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const MapStyles = styled.div`
height: 80vh;
wdith: 100vw;
    h4 {
        color: ${GLOBAL.red};
    }
.route_calcs {
    display: flex;
    flex-direction: row;
}
.buttons, .entries, .results {
    width: 33vw;
    margin: auto;
}
.entries {
    display: flex;
    flex-direction: column;
}
.attraction {
    display: flex;
    flex-direction: row;
}
AutoComplete {
    width: 100%;
}
button.center, button.calc, button.clear {
    margin: 5px;
    color: white;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    height: 30px;
}
button.center {
    background-color: ${GLOBAL.teal}
}
button.calc {
    background-color: ${GLOBAL.purple}
}
button.clear {
    background-color: ${GLOBAL.red}
}
img.info_image {
    height: 15px;
}
#DivForHoverItem {
    height: 30px;
    width: auto;
    display: flex;
    flex-direction: row;
}
#HiddenText {
    display: none;
}
#DivForHoverItem:hover #HiddenText {
    display:block;
    background-color: ${GLOBAL.lightgrey};
    font-size: .75rem;
    border-radius: 3px;
    font-style: italic;
}
`

export default MapStyles;