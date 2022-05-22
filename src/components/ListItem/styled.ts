import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({done}:ContainerProps)=>(
    `
    background-color: ${done? '#0D5C63' : '#247b7b'};
    margin-bottom: 10px;
    padding: 15px 0;
    border-radius: 0 15px;
    display: flex;
    align-items: center;
    font-family: Montserrat;
    text-transform: uppercase;
        input {
            margin: 0 30px;
            width: 25px;
            height: 25px;
        }

        label {
            color: ${done? 'black' : 'white'};
            text-decoration: ${done? 'line-through' : 'none'}
`
))