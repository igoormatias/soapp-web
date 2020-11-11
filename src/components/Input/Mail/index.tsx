import React, {useState} from 'react'
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
    user_name: string,
    setUser_name: string
}


const MailContainer: React.FC<MailContainerPops> = ({ title }) => {('')
const [user_name, setUser_name] = useState('')

    function HandleMail() {
        setUser_name(user_name)
        
    }
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
                <input type="email" id="mail" value={user_name} onChange={(e) => setUser_name(e.target.value)}/>
            </Container>
        </>
    )
}

export default MailContainer