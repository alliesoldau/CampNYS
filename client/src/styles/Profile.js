import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background-color: ${GLOBAL.purple};
    text-align: center;
    color: white;
}
h2.flourish {
    color: ${GLOBAL.orange};
    line-height: 50px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 50px;
}
.user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${GLOBAL.orange};
}
.user-info {
    margin: 10px;
    padding: 20px;
    height: 50%;
    width: 40%;
    background-color: ${GLOBAL.lightorange};
    border-radius: 10%;
}
.line-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
h4 {
    color: ${GLOBAL.purple};
    margin-right: 20px;
}
p {
    color: ${GLOBAL.purple};
    font-style: italic;
}

`

export default Profile;