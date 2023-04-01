const initState = {
    color: 'dark'
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "CHANGE_COLOR_SCHEME": {
            return {
                ...state,
                color: action.color
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (color: string): LoadingActionType => (
    {type: 'CHANGE_COLOR_SCHEME', color}
); // fix any


type LoadingActionType = {
    type: 'CHANGE_COLOR_SCHEME'
    color: string
}
