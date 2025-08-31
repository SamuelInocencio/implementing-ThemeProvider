import styled from 'styled-components';

export const Button = styled.button`
border: ${(props) => (props.topic === 'primary' ? 'nome' : `1px solid ${props.theme.white}`)}; 
background: ${(props) => (props.topic === 'primary' ? `linear-gradient(180deg, ${props.theme.redOrange},${props.theme.pinkSalmon} 100%)` : 'transparent')};
font-size: 16px;
color:  ${(props) => props.theme.white};;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
    opacity: 0.8;
    background: ${(props) => (props.topic === 'primary' ? '' : ` ${props.theme.white} `)};
    color: ${(props) => (props.topic === 'primary' ? '' : `${props.theme.blue} `)};
}

&:active {
    opacity: 0.5;
}
`;
