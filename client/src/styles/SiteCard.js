import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const SiteCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 550px;
    margin: auto;
    min-height: 375px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
h2.big {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 20px;
}
.add-card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 500px;
    height: 200px;
    margin: auto;
    min-height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.site-card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 400px;
    margin: auto;
    min-height: ${props => 
        props.res === true ? "225px"
        : "300px"
        }; 
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: ${props => 
        props.res === true ? `${GLOBAL.purple}` 
        : "white"
        }; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.res-site-card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 400px;
    margin: auto;
    min-height: 225px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: ${props => 
        props.res === true ? `${GLOBAL.purple}` 
        : "white"
        }; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.res-site-card h2 {
    font-size: 5rem;
}
h3.sel {
    color: ${GLOBAL.lightorange};
}
p.sel {
    color: white;
}
.top {
    display: flex;
    flex-direction: row;
}
.left-container {
    width: 60%;
}
.right-container {
    width: 40%;
}
.right-container {
    font-size: 80px;
    color: ${GLOBAL.teal};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.calendar-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto;
    margin-top: 0;
}
h2 {
    margin: auto;
    color: ${props => 
        props.res === true ? `${GLOBAL.orange}`
        : `${GLOBAL.teal}`
        }; 
        display: block;
    font-size: 1.5em;
    font-weight: bold;
}
p {
    color: ${GLOBAL.darkgrey};
    margin-bottom: 2px;
}
h3 {
    color: ${props => 
        props.res === true ? `${GLOBAL.mediumgrey}`
        : `${GLOBAL.teal}`
        }; 
        display: block;
        font-size: 1em;
        font-weight: bold;
        margin-right: 10px;
        margin-bottom: 0px;
        margin-top: 2px;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;
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
button.submit {
    background-color: ${GLOBAL.purple};
}
button.select {
    background-color: ${GLOBAL.purple};
}
button:hover {
    font-weight: bold;
}
.line-items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
}
.react-datepicker {
    font-size: .75em;
  }
  .react-datepicker__header {
    padding-top: 0.6em;
  }
  .react-datepicker__month {
    margin: 0.2em .75em;
  }
  .react-datepicker__day-name, .react-datepicker__day {
    width: 1.9em;
    line-height: 1.9em;
    margin: 0.166em;
  }
  .react-datepicker__current-month {
    font-size: 1em;
  }
  .react-datepicker__navigation {
    top: 1em;
    line-height: 1.7em;
    border: 0.45em solid transparent;
  }
  .react-datepicker__navigation--previous {
    left: 1em;
  }
  .react-datepicker__navigation--next {
    right: 1em;
  }
`

export default SiteCard;