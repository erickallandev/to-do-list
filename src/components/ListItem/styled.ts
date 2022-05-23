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
    justify-content: space-between;
    border: ${done? '1px solid black' : '1px solid white'};

    .removeButton {
        color: ${done? 'white' : 'white'};
        margin-right: 30px;
        font-size: 30px;
        cursor: pointer;
        background-color: ${done? '#247b7b' : '#0D5C63'};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 20px;
        height: 20px;
        border-radius: 20px;

            :hover {
                color: #247b7b;
                background-color: #FFF;
            }
    }

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