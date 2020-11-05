import styled from 'styled-components'
import {FaAngleLeft,FaFacebookF} from 'react-icons/fa'


export const Container = styled.div `
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    

    width: 100vw;
    height: 100vh;
`

export const Eclipse = styled.img`
    position: relative;
    top: -328px;
`

export const ButtonContainer = styled.div `
    display: flex;
    align-items:flex-start;
`

export const ButtonBack = styled(FaAngleLeft)`
    width: 26px;
    height:26px;
    color: #0e0e0e;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items:flex-start;
`

export const Title = styled.text `
    font-size: 28px;
    font-weight: bold;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction:column;
    height: 30px;
`

export const Title2 = styled.text `
    font-size: 13px;
    font-weight: bold;
`

export const IconsContainer = styled.div `
    display:flex;
    flex-direction:row;
    justify-content: space-around;
`

export const Facebook = styled(FaFacebookF)`
    width: 36px;
    height:36px;
    color: #1E90FF;
    margin-left: 150px;
`

export const Gmail = styled.img `
width: 36px;
height:36px;
`