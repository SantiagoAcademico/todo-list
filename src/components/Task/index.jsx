import React from 'react'
import { BsFillXCircleFill, BsFillExclamationCircleFill } from "react-icons/bs";
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
                <Button >
                    <BsFillExclamationCircleFill style={{ fill: "#272b32", width: "2rem", height: "2rem" }} />
                </Button>
                <Button onClick={() => handleTaskRemove(task.id)}>
                    <BsFillXCircleFill style={{ fill: "#272b32", width: "2rem", height: "2rem" }} />
                </Button>
            </ContainerButtons>

        </Container>
    )
}
