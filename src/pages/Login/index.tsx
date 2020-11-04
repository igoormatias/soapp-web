import React from 'react'
import { Link } from 'react-router-dom'
import eclipses from '../../assets/images/eclipses.svg'
import UserContainer from '../../components/Input/User'
import MailContainer from '../../components/Input/Mail'
import google from '../../assets/images/google.svg'
import KeyContainer from '../../components/Input/Key'
import ButtonLogin from '../../components/ButtonLogin'
import {
    Container,
    TitleContainer,
    Title,ButtonContainer,
    ButtonBack,
    Eclipse, 
    Title2 ,
    IconsContainer,
    Facebook,
    Gmail,
    Header
} from './style'

function Login () {
    return (
        <Container>
            <Header><Eclipse src={ eclipses } alt="circles-eclipses" /></Header>
            
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
    
            <UserContainer title="Usuário" />
            <MailContainer title="E-mail" />
            <KeyContainer title="Senha" />

            <Title2> Esqueceu a senha? </Title2>
            <IconsContainer>
                <Gmail src={ google }/>
                <Facebook />
            </IconsContainer>
            <ButtonLogin
                title="Entrar"
                bg="#8C98FF"
                id="login"
                to="/login"
            />
        </Container>
    )
};

export default Login