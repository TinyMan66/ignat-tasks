import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const RootReducer = combineReducers({
    loading: loadingReducer,
    themes: themeReducer
})

const store = legacy_createStore(RootReducer)

export default store

export type AppStoreType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store // for dev
