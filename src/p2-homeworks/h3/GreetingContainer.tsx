import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<string | null>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value);// need to fix
        setError(null);
    }
    const addUser = () => {
        if(name.trim() !== '') {
            addUserCallback(name.trim());
            alert(`Hello ${name.trim()} !`); // need to fix
            setName('');

        } else {
            setError('Name is require!');
        }
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if( event.key === "Enter"){
            addUser();
        }
    }

    const totalUsers = users.map(u => <li key={u._id}> {u.name} </li>) // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            addUserEnter={onKeyDownHandler}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
