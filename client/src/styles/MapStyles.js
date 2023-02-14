import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const MapStyles = styled.div`
height: 90vh;
wdith: 100vw;
position: relative;
    h4 {
        color: ${GLOBAL.red};
    }
.route_calcs {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    bottom: 5vh;
    width: auto;
    margin-left: 375px;
    align-items: center;
    font-family: Arial, sans-serif;
}
.route-calc-container {
    width: 500px;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);
    border-radius: 2px;
}
.route-calcs-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 1px;
}
.buttons, .entries, .results {
    background-color: none;
    font-size: 14px;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.entries {
    display: flex;
    margin-right: 20px;
    padding-right: 20px;
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: center;
    border-right: 1px groove ${GLOBAL.lightgrey};
}
.attraction {
    display: flex;
    flex-direction: row;
}
.autocomplete {
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.attraction p {
    margin-right: 5px;
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
    font-size: 14px;
    height: 30px;
    width: 130px;
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
button.info-button {
    background-color: ${GLOBAL.lightgrey};
    color: ${GLOBAL.blackgrey};
    border-radius: 10px;
    border: none;
    margin-right: 2px;
    margin-left: 2px;
    margin-top: 5px;
}
img.info_image {
    height: 15px;
    margin-top: 10px;
}
.image-container {
    padding: auto;
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
.filters {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5vh;
    left: 1vw;
    z-index: 2;
    width: auto;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.4);
    border-radius: 2px;
    font-size: 14px;
}
.all-checks {
    display: flex;
    flex-direction: row;
    color: ${GLOBAL.blackgrey};
}
.checks-left, .checks-right {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
h2.cgfilters {
    font-size: 16px;
    margin: 0;
}
`

export default MapStyles;