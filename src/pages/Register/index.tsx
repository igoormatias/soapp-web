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
    IconsContainer,
    Facebook,
    Gmail
} from './style'
import FullnameContainer from './components/FullnameContainer'
import ButtonLogin from '../../components/ButtonLogin'

function Register () {
    return (
        <Container>
            <Eclipse src={ eclipses } alt="circles-eclipses" />''
            <ButtonContainer>
                <Link to="/" >
                    <ButtonBack />
                </Link>
            </ButtonContainer>

            <TitleContainer>
                <Title>
                    Cadastrar
                </Title>
            </TitleContainer>

            <FullnameContainer/>
            <UserContainer title="Usuário" />
            <MailContainer title="E-mail" />
            <KeyContainer title="Senha" />
            <KeyContainer title="Digite a sua senha novamente" />

            <IconsContainer>
                <Gmail src={ google }/>
                <Facebook />
            </IconsContainer>
            <ButtonLogin title="Cadastrar" bg="#8F8CFF" />
        </Container>
    )
};

export default Register