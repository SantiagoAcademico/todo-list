import React, { useState } from 'react'
import { HeaderList } from '../HeaderList'
import { TasksList } from '../TasksList';
import { Container } from './style'

import { v4 as uuidv4 } from 'uuid'


export const Layout = () => {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: 'task teste',
            isCompleted: true
        }
    ]);

    const handleTaskRemove = (taskId) => {
        const tasksList = tasks.filter(task => (taskId !== task.id))
        setTasks(tasksList)
    }

    const handleTaskClick = (taskId) => {
        const newTask = tasks.map(
            (task) => {
                if (task.id === taskId) return { ...task, isCompleted: !task.isCompleted }

                return task
            }
        )
        setTasks(newTask)
    }

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks,
        {
            id: uuidv4(),
            title: taskTitle,
            isCompleted: false
        }
        ]
        setTasks(newTask)
    }


    return (
        <Container>
            <HeaderList handleTaskAddition={handleTaskAddition} />
            <TasksList
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
            />
        </Container>
    )
}
