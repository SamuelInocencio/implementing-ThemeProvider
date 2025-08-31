import styled from 'styled-components';

export const Container = styled.div`
background-color: ${(props) => props.theme.darkNavyBlue};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
`;

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
`;

export const InputLabel = styled.label`
color:  ${(props) => props.theme.white};
font-size: 12px;
font-weight: 500;

span {
    color:  ${(props) => props.theme.tomato};
}
`;

export const Input = styled.input`
border-radius: 10px;
    color:  ${(props) => props.theme.lightGray};
border: 1px solid ;
background-color: ${(props) => props.theme.white};
padding: 12px 20px;
outline: none;
width: 100%;
`;
