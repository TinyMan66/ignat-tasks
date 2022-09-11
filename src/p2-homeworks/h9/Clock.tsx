import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

const getTwoDigitsString = (num: number) => num < 10 ? ` 0${num}` : num;

function Clock() {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(!show)
    }
    const onMouseLeave = () => {
        // close
        setShow(!show)
    }

    const stringTime = `Time ${getTwoDigitsString(date.getHours())} : ${getTwoDigitsString(date.getMinutes())} : ${getTwoDigitsString(date.getSeconds())}` // fix with date
    const stringDate = `Date: ${getTwoDigitsString(date.getDate())} ${getTwoDigitsString(date.getMonth())} ${date.getFullYear()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={styles.time}
            >
                {stringTime}
            </div>

            {show && (
                <div className={styles.date}>
                    {stringDate}
                </div>
            )}

            <div className={styles.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
