import React from 'react'
import {
    CgMail
} from 'react-icons/cg'
import {
    Container,
    IconContainer,
    Title
} from '../style'

interface MailContainerPops {
    title: string;
}

const MailContainer: React.FC<MailContainerPops> = ({ title }) => {
    return (
        <>
            <Title>{ title }</Title>
            <Container onClick={ () => {
                const input = document.getElementById('mail')
                input?.focus()
            } }>
                <IconContainer bg="#FBF8DD">
                    <CgMail />
                </IconContainer>
                <input type="email" id="mail" />
            </Container>
        </>
    )
}

export default MailContainer