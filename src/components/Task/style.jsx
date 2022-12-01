import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 3em;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border-radius: 9px;
    background-color: #fff;
    color: #000;
    border-left: 10px solid transparent;

    svg{
        width: 2rem;
        fill: #fff;
    }

`
export const TitleTask = styled.h2`
    width: 90%;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
`
export const ContainerButtons = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 50%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`
