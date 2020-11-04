import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    width: 301px;
    
    border-bottom: 2px solid #707070;

    input {
        border: 0;
    }

    font-size: 1.6rem;

    color: #3E3E3E;
`
export const Title = styled.strong`
    align-self: flex-start;

    margin-left: 30px;

    font-size: 1rem;

    color: #000;
`

export const IconContainer = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 37.9px;

    background: ${ props => props.bg };

    border-radius: 8px;
`
