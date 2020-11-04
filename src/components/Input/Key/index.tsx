import React from 'react'
import { BiKey } from 'react-icons/bi'
import {
    Container,
    IconContainer
} from '../style'

const KeyContainer = () => {
    return (
        <Container>
            <IconContainer bg="#DDFBE6">
                <BiKey/>
            </IconContainer>
            <input/>
        </Container>
    )
}

export default KeyContainer