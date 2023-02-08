import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

// background effect source: https://codepen.io/carpenumidium/pen/vNNzyG 

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, ${GLOBAL.teal}, ${GLOBAL.orange});
    background-color: hsla(200,40%,30%,.4);
	background-image:		
            url('https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png'), 
            url('https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png'),
            url('https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png'),
            url('https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png'),
            url('https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png');
        background-repeat: repeat-x;
        background-position: 
            0 20%,
            0 100%,
            0 50%,
            0 100%,
            0 0;
        background-size: 
            2500px,
            800px,
            500px 200px,
            1000px,
            400px 260px;
        animation: 150s para infinite linear;
        }
    @keyframes para {
        100% {
            background-position: 
                -5000px 20%,
                -800px 95%,
                500px 50%,
                1000px 100%,
                400px 0;
            }
        }
    height: 100vh;
    with: 100vw;
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        padding: 20px;
        border: 2px solid ${GLOBAL.darkgrey};
        border-radius: 10px;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .form-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        height: 100%;
        padding-top: 60px;
        justify-content: center;
    }
    button {
        height: 35px;
        width: auto;
        border: none;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        background-color: transparent;
    }


`
export default Landing;