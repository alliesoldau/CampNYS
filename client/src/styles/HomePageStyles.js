import styled from "styled-components";
import { GLOBAL } from './GlobalVar';

// CSS help from source: https://www.youtube.com/watch?v=IF6k0uZuypA&ab_channel=Fireship

const HomePageStyles = styled.div`
    img.bog {
        width: 100vw;
        height: calc(100vh - ${GLOBAL.navsize}) 
        object-fit: cover;
        overflow: hidden;
    }
    color: blue;
`

export default HomePageStyles;