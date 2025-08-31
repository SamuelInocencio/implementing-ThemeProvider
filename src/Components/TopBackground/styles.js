import styled from "styled-components";

export const Background = styled.div`
background: linear-gradient(to right, ${(props) => props.theme.redOrange}, ${(props) => props.theme.burgundyMaroon});
height: 30vh;
width: 90vw;
max-width: 800px;
border-radius: 30px;

display: flex;
align-items: center;
justify-content: center;

img {
    max-width: 100%;
    max-height: 100%;
}
`;