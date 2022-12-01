import React from 'react'
import { Container, Info } from './style'

export const TasksListInfo = ({ amountTasks, completedTasks }) => {
    return (
        <Container>
            <Info>
                <p className='created'>
                    Tarefas criadas
                </p>
                <span>{amountTasks}</span>
            </Info>
            <Info>
                <p className='completed'>
                    Concluidas
                </p>
                <span>{completedTasks}</span>
            </Info>
        </Container>
    )
}
