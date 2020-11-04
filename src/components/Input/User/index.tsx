import React from 'react'
import {
    BiUser
} from 'react-icons/bi'
import {
    Container,
    IconContainer,
    Title
} from '../style'

interface UserContainerPops {
    title: string;
}

const UserContainer: React.FC<UserContainerPops> = ({ title }) => {
    return (
        <>
            <Title>{ title }</Title>
            <Container onClick = {() => {
                const input = document.getElementById('user')
                input?.focus()
            }} >
                <IconContainer bg="#FBDDE2">
                    <BiUser/>
                </IconContainer>
                <input id="user" />
            </Container>
        </>
    )
}

export default UserContainer