import React from 'react'
import {
    CgMail
} from 'react-icons/cg'
import {
    Container,
    IconContainer
} from '../style'

const MailContainer: React.FC = () => {
    return (
        <Container onClick={ () => {
            const input = document.getElementById('mail')
            input?.focus()
        } }>
            <IconContainer bg="#FBF8DD">
                <CgMail />
            </IconContainer>
            <input id="mail" />
        </Container>
    )
}

export default MailContainer