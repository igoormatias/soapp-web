import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link } from 'react-router-dom'

import api from '../../services/api'
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
    const [user_name, setUser_name] = useState('')
const [user_password, setUser_password] = useState('')

    const handleLogin = async(event: FormEvent) => {

        const data = new FormData()
    
        data.append("user_name", user_name)
        data.append("user_password", user_password)
    
        await api.post('/login', data)
    
        alert("Login efetuado com sucesso")
    } 
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
            <br/>
            <MailContainer title="E-mail" />
            <br/>
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
                onClick={handleLogin}
            />
        </Container>
    )
};

export default Login