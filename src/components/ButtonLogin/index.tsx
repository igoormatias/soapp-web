import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button
} from './style'

interface ButtonLoginProps {
    title: string;
    bg?: string;
    id?: string;
    to?: any;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ title, bg, id ,to}) => {
    return (
        <Link to={ to }>
            <Button id={ id } bg={ bg } >
                { title }
            </Button>
        </Link>
    )
}

export default ButtonLogin