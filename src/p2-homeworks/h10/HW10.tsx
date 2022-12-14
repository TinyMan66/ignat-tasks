import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from './images/preloader.gif'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import styles from './HW10.module.css'

function HW10() {
    const isLoading =  useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
        console.log('loading...')
    };

    return (
        <div className={styles.main}>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div><img src={preloader} alt={"preloader"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
