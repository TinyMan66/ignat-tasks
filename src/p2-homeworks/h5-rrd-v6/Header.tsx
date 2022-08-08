import React from 'react'
import styles from './Header.module.css'
import {PATH} from "./Pages";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            {/*add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} style={({isActive})=> ({color: isActive ? '#0B76EF' : '#4fad18'})}
                     className={styles.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} style={({isActive})=> ({color: isActive ? '#0B76EF' : '#4fad18'})}
                     className={styles.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} style={({isActive})=> ({color: isActive ? '#0B76EF' : '#4fad18'})}
                     className={styles.link} >junior+</NavLink>
            {/*style={({isActive})=> ({color: isActive ? '#0B76EF' : '#4fad18'})} className={styles.link}*/}
            {/*className={(isActive) => isActive ? styles.active : styles.link}*/}
            <div className={styles.block}/>
        </div>
    )
}

export default Header

