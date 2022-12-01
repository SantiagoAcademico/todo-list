import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    height: 85%;

    .completed{
        border-color: var(--color-blue-dark);
    }
    .notCompleted{
        border-color: #f87a5b;
    }
`

export const NoTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg{
        width: 5rem;
        height: 5rem;
        color: var(--color-grey-400);
    }
    p{
        text-align: center;
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--color-grey-300);
    }
    span{
        font-weight: 400;
    }
`
