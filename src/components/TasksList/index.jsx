import React from 'react'
import { Task } from '../Task';
import { Container } from './style'

export const TasksList = ({ tasks, handleTaskClick, handleTaskRemove }) => {


    return (
        <Container>
            {
                tasks.map(task =>
                    <Task
                        handleTaskClick={handleTaskClick}
                        task={task}
                        handleTaskRemove={handleTaskRemove}
                    />)
            }
        </Container>
    )
}
