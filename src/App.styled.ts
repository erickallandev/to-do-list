import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0d5c63;
    min-height: calc(100vh - 90px);
    margin: 0;
    padding-top: 30px;
    padding-bottom: 20px;
`;

export const Area = styled.div`
    max-width: 980px;
    margin: auto;
`;

export const Header = styled.h1`
    color: #78cdd7;
    margin: 0;
    text-align: center;
    font-family: Lobster;
    font-size: 60px;
    border-bottom: 1px solid #78cdd7;
    padding: 20px;
`;

export const Footer = styled.footer`
    background-color: #78cdd7;
    color: #000;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
`;

export const link = styled.a`
    text-decoration: none;
    color: inherit;
`;