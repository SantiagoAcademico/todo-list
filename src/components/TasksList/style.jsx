import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    height: 85%;

    .completed{
        border-color: #6ffc2d;
    }
    .notCompleted{
        border-color: #f87a5b;
    }
`