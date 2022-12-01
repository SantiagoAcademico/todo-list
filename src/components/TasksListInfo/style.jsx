import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 98%;
    max-width: 1000px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-300);
    margin: 3rem 0;
    padding: 3rem 0 1rem 0;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;

    .created {
        color: var(--color-blue);
    }
    .completed {
        color: var(--color-purple);
    }

    span{
        background-color: var(--color-grey-400);
        padding: .1rem .6rem;
        margin-left: .5rem;
        border-radius: 50%;
    }
`