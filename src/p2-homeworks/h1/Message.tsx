import React from 'react'
import s from './Message.module.css'
type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.message} >
            <img src={props.avatar} className={s.picture}/>

            <div className={s.angel}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.textMessage}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
