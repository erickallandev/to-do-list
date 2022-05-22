import styled from 'styled-components';

export const Container = styled.div`
    background-color: #247b7b;
    margin-bottom: 10px;
    padding: 15px 0;
    border-radius: 0 15px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
        input {
            background-color: transparent;
            outline: none;
            border: none;
            width: 80%;
            margin: 0;
            padding: 10px;
            color: #FFF;
            text-align: center;
            font-size: 18px;
            font-family: Montserrat;
            font-weight: bold;
            text-transform: uppercase;

            ::placeholder {
                color: rgba(255, 255, 255, 0.8);
            }
        }

`;