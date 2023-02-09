import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

const Profile = styled.div`
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
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
    justify-content: flex-start;
}
.line-item h4{
    margin-right: 20px;
    width: 100px;
}
img {
    width: 200px;
    height: 200px;
}
.pro-pic {
    background-color: #fff;
    border-radius: 100px;
    overflow: hidden;
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    top: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
}
`

export default Profile;