import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import {
    Container,
    IconContainer
} from './style'

const FullnameContainer = () => {
    return (
        <Container onClick={ () => {
            const input = document.getElementById('fullname')
            input?.focus()
        }}>
            <IconContainer bg="#DDEBFB">
                <HiOutlineUsers/>
            </IconContainer>
            <input id="fullname" />
        </Container>
    )
}

export default FullnameContainer