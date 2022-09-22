type initStateType = typeof initState;
export type loadingAType =  ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingAType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => (
    { type: 'LOADING', isLoading } as const) // fix any