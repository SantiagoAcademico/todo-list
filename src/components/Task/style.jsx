import styled from 'styled-components';

export const Container = styled.div`
    width: 98%;
    max-width: 1000px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border-radius: 9px;
    background-color: var(--color-grey-500);
    color: #fff;
    border-left: 10px solid transparent;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
    }

`
export const TitleTask = styled.h2`
    width: 90%;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1em 0;
`
export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 50%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`
