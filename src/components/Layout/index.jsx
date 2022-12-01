import React, { useState } from 'react'
import { HeaderList } from '../HeaderList'
import { TasksList } from '../TasksList';
import { Container } from './style'

import { v4 as uuidv4 } from 'uuid'


export const Layout = () => {
    const [tasks, setTasks] = useState([]);
    const [amountTasks, setAmountTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    const handleTaskRemove = (taskId) => {
        const tasksList = tasks.filter(task => (taskId !== task.id))
        setTasks(tasksList)
        setAmountTasks(amountTasks - 1)
    }

    const handleTaskClick = (taskId) => {
        const newTask = tasks.map(
            (task) => {
                if (task.id === taskId) {
                    if (task.isCompleted === false) {
                        setCompletedTasks(completedTasks + 1)
                    } else {
                        setCompletedTasks(completedTasks - 1)
                    }
                    return { ...task, isCompleted: !task.isCompleted }
                }
                return task
            }
        )
        setTasks(newTask)
    }

    const handleTaskAddition = (taskTitle) => {
        if (taskTitle) {
            const newTask = [...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                isCompleted: false
            }
            ]
            setTasks(newTask)
            setAmountTasks(amountTasks + 1)
        } else {
            alert('Você precisa digitar algo para ser o titulo da tarefa!')
        }

    }


    return (
        <Container>
            <HeaderList handleTaskAddition={handleTaskAddition} />
            <TasksList
                tasks={tasks}
                amountTasks={amountTasks}
                completedTasks={completedTasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
            />
        </Container>
    )
}
