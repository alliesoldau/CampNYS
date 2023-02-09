import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Profile = styled.div`
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 40vw;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.edit-profile {
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 40vw;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${GLOBAL.purple};
    text-align: center;
    width: 100%;
}
.edit-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${GLOBAL.red};
    color: white;
    text-align: center;
    width: 100%;
}
.header h1 {
    font-size: 2rem;
    margin-bottom: 0;
    color: white;
    margin-top: 10px;
}
.header p {
    font-size: 1rem;
    color: ${GLOBAL.lightgrey};
    margin-top: 5px;
}
.user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;
}
.user-info {
    margin: 10px;
    padding: 20px;
    height: 50%;
    border-radius: 10%;
}
.line-item {
    display: flex;
    flex-direction: row;
}
.line-item h4 {
    margin-right: 20px;
    width: 100px;
}
.line-item p {
    padding-top: 5px;
    color: ${GLOBAL.darkgrey};
}
img {
    width: 150px;
    height: 150px;
}
.pro-pic {
    background-color: #fff;
    border-radius: 100px;
    overflow: hidden;
    height: 150px;
    width: 150px;
    position: relative;
    margin: auto;
    top: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
}
.edit-pro-pic {
    background-color: #fff;
    border-radius: 100px;
    overflow: hidden;
    height: 150px;
    width: 150px;
    position: relative;
    margin: 10px;
    top: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
button {
    background-color: ${GLOBAL.teal};
    color: white;
    width: 125px;
    height: 30px;
    border-radius: 15px;
    border: none;
}
button:hover {
    font-weight: bold;
}
label, input {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
}
`

export default Profile;