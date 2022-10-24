type initStateType = typeof initState;
export type changeThemeType =  ReturnType<typeof changeThemeC>

const initState = {
    themes: ['dark', 'red', 'some', 'blue', 'yellow'],
    theme: 'some'
};

export const themeReducer = (state: initStateType = initState, action: changeThemeType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => (
    { type: 'CHANGE-THEME', theme } as const); // fix any