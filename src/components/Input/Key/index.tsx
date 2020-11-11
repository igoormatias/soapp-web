import React,{useState} from 'react'
import { BiKey } from 'react-icons/bi'
import {
    Container,
    IconContainer,
    Title
} from '../style'

interface KeyContainerProps {
    title: string;
    user_password?: string;
}

const KeyContainer: React.FC<KeyContainerProps> = ({ title }) => {
    const [user_password, setUser_password] = useState('')
    return (
        <>
            <Title>{ title }</Title>
            <Container>
                <IconContainer bg="#DDFBE6">
                    <BiKey/>
                </IconContainer>
                <input type="password" value={user_password} onChange={(e) => setUser_password(e.target.value)}/>
            </Container>
        </>
    )
}

export default KeyContainer 