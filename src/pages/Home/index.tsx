import React from 'react'
import eclipses from '../../assets/images/eclipses.svg'
import eclipses2 from '../../assets/images/eclipses2.svg'
import logo from '../../assets/images/logo.svg'
import ButtonLogin from '../../components/ButtonLogin'
import {
    Container,
    Eclipse,
    Logo,
    Eclipse2
} from './stye'

function Home () {
    return (
        <Container>
            <Eclipse src={ eclipses } alt="circles-eclipses" />
            <Logo src={ logo } alt="soapp" />
            <ButtonLogin
                title="Entrar"
                bg="#8C98FF"
                id="login"
            />
            <ButtonLogin
                title="Cadastrar-se"
                bg="#000"
                id="sigup"
            />
            <Eclipse2 src={ eclipses2 } alt="circles-eclipses" />
        </Container>
    )
}

export default Home