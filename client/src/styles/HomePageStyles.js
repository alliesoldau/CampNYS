import styled from "styled-components";
import { GLOBAL } from './GlobalVar';
import cairn from '../images/cairn.jpeg'


// CSS help from source: https://www.youtube.com/watch?v=IF6k0uZuypA&ab_channel=Fireship

// .container {
//     background-color: rgba(255, 255, 255, .15);  
//     backdrop-filter: blur(5px);
//    }


// img.bog {
//     width: 100vw;
//     height: calc(100vh - ${GLOBAL.navsize}) 
//     object-fit: cover;
//     overflow: hidden;
// }
// color: blue;
const HomePageStyles = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${cairn}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

export default HomePageStyles;