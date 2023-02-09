import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 40vw;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
.profile-container {
    border-radius: 5px;
}
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${GLOBAL.purple};
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
    background-color: white;
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
    justify-content: flex-start;
    align-items: center;
}

`

export default Profile;