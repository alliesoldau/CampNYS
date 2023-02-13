import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const SiteCard = styled.div`
.card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 400px;
    margin: auto;
    height: 300px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.add-card {
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
    width: 500px;
    margin: auto;
    height: 200px;
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
    height: 300px;
    padding: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => 
        props.selected === true ? `${GLOBAL.purple}` 
        : 'white'
        };
.top {
    display: flex;
    flex-direction: row;
}
.left-container, .right-container {
    width: 50%;
}
.right-container {
    font-size: 80px;
    color: ${GLOBAL.teal};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h2 {
    margin: auto;
}
p {
    font-size: 1rem;
}
h3 {
    color: ${props => 
        props.selected === true ? 'white' 
        : `${GLOBAL.darkgrey}`
        };
    margin-top: 0;

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
    background-color: ${props => 
        props.selected === true ? 'white' 
        : `${GLOBAL.purple}`
        };
    color: ${props => 
        props.selected === true ? `${GLOBAL.purple}` 
        : 'white'
        };
}
button:hover {
    font-weight: bold;
}
`

export default SiteCard;