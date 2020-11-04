import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import {
    Container,
    IconContainer
} from './style'

const FullnameContainer = () => {
    return (
        <Container onClick={ () => {
            const input = document.getElementById('mail')
            input?.focus()
        }}>
            <IconContainer bg="#DDEBFB">
                <HiOutlineUsers/>
            </IconContainer>
            <input/>
        </Container>
    )
}

export default FullnameContainer