import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { Button, Container, ContainerButtons, TitleTask } from './style'

export const Task = ({ task, handleTaskClick, handleTaskRemove }) => {


    return (
        <Container
            className={task.isCompleted ? 'completed' : 'notCompleted'}
        >
            <TitleTask
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </TitleTask>
            <ContainerButtons>
                <Button onClick={() => handleTaskRemove(task.id)}>
                    <IoTrashOutline />
                </Button>
            </ContainerButtons>

        </Container>
    )
}
