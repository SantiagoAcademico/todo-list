import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { Button, Header, Input, InputArea, Title } from './style'

export const HeaderList = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }


    return (
        <Header>
            <Title>Lista de tarefas</Title>
            <InputArea>
                <Input
                    onChange={handleInputChange}
                    value={inputData}
                    placeholder='Adicione uma tarefa.'
                />
                <Button onClick={handleAddTaskClick}>
                    criar
                    <IoAddCircleOutline />
                </Button>
            </InputArea>
        </Header>
    )
}
