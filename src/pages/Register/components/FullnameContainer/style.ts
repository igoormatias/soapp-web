import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    width: 301px;
    
    margin-top: 190px;

    border-bottom: 2px solid #707070;

    input {
        border: 0;

        margin-left: 4px;
    }

    font-size: 1.6rem;

    color: #3E3E3E;
`

export const IconContainer = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 37.9px;

    margin-bottom: 7.1px;

    background: ${ props => props.bg };

    border-radius: 8px;
`