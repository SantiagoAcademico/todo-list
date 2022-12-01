import React from 'react'
import { IoClipboardOutline } from "react-icons/io5";
import { Task } from '../Task';
import { TasksListInfo } from '../TasksListInfo';
import { Container, NoTasks } from './style'

export const TasksList = ({ tasks, amountTasks, completedTasks, handleTaskClick, handleTaskRemove }) => {
    const IsNoTasks = () => {
        if (tasks.length === 0) {
            return (
                <NoTasks>
                    <IoClipboardOutline />
                    <p>
                        Você ainda não tem tarefas cadastradas <br />
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                </NoTasks>
            )
        }
    }

    return (
        <Container>

            <TasksListInfo
                amountTasks={amountTasks}
                completedTasks={completedTasks}
            />
            {IsNoTasks()}
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
