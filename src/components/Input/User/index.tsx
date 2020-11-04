import React from 'react'
import {
    BiUser
} from 'react-icons/bi'
import {
    Container,
    IconContainer
} from '../style'

const UserContainer: React.FC = () => {
    return (
        <Container onClick = {() => {
            const input = document.getElementById('user')
            input?.focus()
        }} >
            <IconContainer bg="#FBDDE2">
                <BiUser/>
            </IconContainer>
            <input id="user" />
        </Container>
    )
}

export default UserContainer