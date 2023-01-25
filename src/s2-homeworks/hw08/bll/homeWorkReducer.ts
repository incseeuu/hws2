import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = state.map(el => el)
            return action.payload === 'up'
                ? copyState.sort((a, b) => a.name.localeCompare(b.name))
                : copyState.sort((a,b) => b.name.localeCompare(a.name))
            // need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= 18)
            // need to fix
        }
        default:
            return state
    }
}
