import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


export type ThemesType = {
    themes: string[]
}
export type ThemeType = {
    theme: string
}

// const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string> (state => state.themes.theme)
    const themes = useSelector<AppStoreType, string[]>(state => state.themes.themes);

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={`${s[theme + '-text']} ${s.span}`}>
                homeworks 12
            </span>
            <SuperSelect
                value={theme}
                options={themes}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
