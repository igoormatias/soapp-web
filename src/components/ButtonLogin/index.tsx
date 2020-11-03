import React from 'react'
import {
    Button
} from './style'

interface ButtonLoginProps {
    title: string;
    bg?: string;
    id?: string;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ title, bg, id }) => {
    return (
        <Button id={ id } bg={ bg } >
            { title }
        </Button>
    )
}

export default ButtonLogin