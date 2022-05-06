import styled from 'styled-components'
import {Link} from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => ( primary ? '#f4a460' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => ( primary ? '#fff' :'#01BF71' )};
        text-decoration: none;
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
