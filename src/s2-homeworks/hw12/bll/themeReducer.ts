const initState: TypeState = {
    themeId: 1,
}

export type TypeState = {
    themeId: number
}

type ChangeThemeId = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ChangeThemeId): TypeState => { // fix any

    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
