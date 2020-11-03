import styled from 'styled-components'

export const Button = styled.button`
    width: 273px;
    height: 46px;

    border: 0;
    border-radius: 3px;
    
    color: #fff;
    background-color: ${ (props) => props.bg };

    margin: 12px;

    font-size: 1.2rem;
`