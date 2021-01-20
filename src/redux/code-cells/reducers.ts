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
}

const INITIAL_STATE: CodeCellState = {
    loading: false,
    error: null,
    order: [],
    data: {},
    themeIsDark: false
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
            const codeCell: CodeCell = {
                id: generateRandomId(),
                content: `const x = ${Math.floor(Math.random() * 10000)}`,
            }

            state.data[codeCell.id] = codeCell
            state.order.push(codeCell.id)

            return state
        case ActionsTypesNamesCodeCell.TOGGLE_EDITOR_THEME:
            state.themeIsDark = !state.themeIsDark

            return state
        default:
            return state
    }
})

export function generateRandomId() {
    return Math.random().toString(36).substring(2, 5)
}
