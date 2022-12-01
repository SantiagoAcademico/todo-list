import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    gap:1rem;
    width: 100%;
    height: 15%;
    background-color: var(--color-grey-700);
`

export const Title = styled.h1`
    font-size: 3rem;
`
export const InputArea = styled.div`
    width: 98%;
    max-width: 700px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.input`
    color: #fff;
    font-size: 1.3rem;
    background-color: var(--color-grey-500);
    padding: .75em 1.5em;
    height: 100%;
    width: 75%;
    border: none;
    border-radius: 10px;
    border: 1px solid #1e2227;

    outline: none;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: #12fc00;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    width: 20%;
    height: 100%;
    border-radius: 10px;
    border: none;
    font-weight: 900;

`