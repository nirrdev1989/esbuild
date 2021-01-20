import {
    ActionsTypesNamesCodeCell,
    MoveCodeCellActionType,
    DeleteCodeCellActionType,
    UpdateCodeCellActionType,
    AddCodeCellActionType,
    ToggleEditorThemeActionType
} from "./actions.types";
import { CodeCellMoveType } from "./models";


export function moveCodeCell(id: string, direction: CodeCellMoveType): MoveCodeCellActionType {
    return {
        type: ActionsTypesNamesCodeCell.MOVE_CODE_CELL,
        payload: {
            id: id,
            direction: direction
        }
    }
}

export function deleteCodeCell(id: string): DeleteCodeCellActionType {
    return {
        type: ActionsTypesNamesCodeCell.DELETE_CODE_CELL,
        payload: id
    }
}

export function addCodeCell(id: string): AddCodeCellActionType {
    return {
        type: ActionsTypesNamesCodeCell.ADD_CODE_CELL,
        payload: {
            id: id,
        }
    }
}

export function updateCodeCell(id: string, content: string): UpdateCodeCellActionType {
    return {
        type: ActionsTypesNamesCodeCell.UPDATE_CODE_CELL,
        payload: {
            id: id,
            content: content
        }
    }
}

export function toggleEditorTheme(): ToggleEditorThemeActionType {
    return {
        type: ActionsTypesNamesCodeCell.TOGGLE_EDITOR_THEME,
    }
}