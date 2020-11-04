import React from 'react'
import { Link } from 'react-router-dom'
import eclipses from '../../assets/images/eclipses.svg'
import UserContainer from '../../components/Input/User'
import MailContainer from '../../components/Input/Mail'
import google from '../../assets/images/google.svg'
import KeyContainer from '../../components/Input/Key'
import {
    Container,
    TitleContainer,
    Title,ButtonContainer,
    ButtonBack,
    Eclipse, 
    Title2 ,
    IconsContainer,
    Facebook,
    Gmail
} from './style'

function Login () {
    return (
        <Container>
            <Eclipse src={ eclipses } alt="circles-eclipses" />
            <ButtonContainer>
                <Link to="/" >
                    <ButtonBack />
                </Link>
            </ButtonContainer>

            <TitleContainer>
                <Title>
                    Entrar
                </Title>
            </TitleContainer>
    
            <UserContainer/>
            <MailContainer/>
            <KeyContainer/>

            <Title2> Esqueceu a senha? </Title2>
            <IconsContainer>
                <Gmail src={ google }/>
                <Facebook />
            </IconsContainer>
        </Container>
    )
};

export default Login