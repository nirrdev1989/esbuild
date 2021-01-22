import { ActionsTypesNamesCodeCell, CodeCellActionsTypes } from "./actions.types";
import { CodeCell } from "./models";
import { produce } from "immer";

interface CodeCellState {
    loading: boolean
    error: string | null
    order: string[]
    data: {
        [key: string]: CodeCell
    }
    themeIsDark: boolean
    activeEditCellInfo: {
        title: string
        id: string
        description: string
    }
}

const INITIAL_STATE: CodeCellState = {
    loading: false,
    error: null,
    order: [],
    data: {},
    themeIsDark: false,
    activeEditCellInfo: {
        id: '',
        title: '',
        description: ''
    }
}


export const codeCellReducer = produce((state: CodeCellState = INITIAL_STATE, action: CodeCellActionsTypes) => {
    switch (action.type) {
        case ActionsTypesNamesCodeCell.MOVE_CODE_CELL:
            const index = state.order.findIndex((id) => id === action.payload.id)
            const checkIndex = action.payload.direction === 'up' ? index - 1 : index + 1

            if (checkIndex < 0 || checkIndex > state.order.length - 1) {
                return state
            }

            state.order[index] = state.order[checkIndex]
            state.order[checkIndex] = action.payload.id

            return state
        case ActionsTypesNamesCodeCell.DELETE_CODE_CELL:
            delete state.data[action.payload]
            state.order = state.order.filter((id) => id !== action.payload)

            return state
        case ActionsTypesNamesCodeCell.UPDATE_CODE_CELL:
            state.data[action.payload.id].content = action.payload.content

            return state
        case ActionsTypesNamesCodeCell.ADD_CODE_CELL:
            let codeCell: CodeCell
            if (state.order.length === 0) {
                codeCell = {
                    id: generateRandomId(),
                    content: `document.getElementById('root').textContent = "Hello"`,
                    init: true,
                    title: 'Exsmple',
                    description: 'This is exsmple snippet'

                }
            } else {
                codeCell = {
                    id: generateRandomId(),
                    content: ``,
                    init: false,
                    title: action.payload.title,
                    description: action.payload.description
                }
            }

            state.data[codeCell.id] = codeCell
            state.order.push(codeCell.id)

            return state
        case ActionsTypesNamesCodeCell.UPDATE_CODE_CELL_INFO:
            const currentInfo = state.activeEditCellInfo

            state.data[currentInfo.id].title = action.payload.title
            state.data[currentInfo.id].description = action.payload.description

            state.activeEditCellInfo.description = ''
            state.activeEditCellInfo.title = ''

            return state
        case ActionsTypesNamesCodeCell.SET_CURRENT_CODE_CELL:
            state.activeEditCellInfo = action.payload

            return state
        case ActionsTypesNamesCodeCell.TOGGLE_EDITOR_THEME:
            state.themeIsDark = !state.themeIsDark

            return state
        default:
            return state
    }
})

export function generateRandomId() {
    return Math.random().toString(36).substring(2, 7) + Math.random()
}
