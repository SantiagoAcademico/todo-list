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
    max-width: 1000px;
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
    width: 85%;
    border: none;
    border-radius: 10px;
    border: 1px solid #1e2227;

    outline: none;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    background-color: var(--color-blue-dark);
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 2rem;
    height: 100%;
    border-radius: 10px;
    border: none;
    font-weight: 900;

`