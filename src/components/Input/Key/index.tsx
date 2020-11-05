import React from 'react'
import { BiKey } from 'react-icons/bi'
import {
    Container,
    IconContainer,
    Title
} from '../style'

interface KeyContainerProps {
    title: string;
}

const KeyContainer: React.FC<KeyContainerProps> = ({ title }) => {
    return (
        <>
            <Title>{ title }</Title>
            <Container>
                <IconContainer bg="#DDFBE6">
                    <BiKey/>
                </IconContainer>
                <input type="password" />
            </Container>
        </>
    )
}

export default KeyContainer