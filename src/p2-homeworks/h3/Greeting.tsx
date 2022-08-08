import React, {ChangeEvent, ReactElement, KeyboardEvent} from 'react'
import style from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: Array<ReactElement>// need to fix any
    addUserEnter: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : '' // need to fix with (?:)

    return (
        <div >
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={addUserEnter}
            />
            <button className={style.button} onClick={addUser}>add</button>
            {error && <div className={style.errorMessage}>{error}</div>}
            {/*<span>{error}</span>*/}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
