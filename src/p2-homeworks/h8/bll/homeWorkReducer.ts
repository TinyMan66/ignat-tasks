import {UserType} from "../HW8";

type sortUpActionType = ReturnType<typeof sortUpAC>;
type sortDownActionType = ReturnType<typeof sortDownAC>;
type checkActionType = ReturnType<typeof checkAC>;

type actionsType = sortUpActionType | sortDownActionType | checkActionType;

export const homeWorkReducer = (state: Array<UserType>, action: actionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload === 'up' ? newState : newState.reverse();
        }
        case 'check': {
            // need to fix
            return state.filter(a => a.age >= action.payload);
        }
        default:
            return state
    }
}

export const sortUpAC = () => {
    return {type: 'sort', payload: 'up'} as const;
}

export const sortDownAC = () => {
    return {type: 'sort', payload: 'down'} as const;
}

export const checkAC = () => {
    return {type: 'check', payload: 18} as const;
}
