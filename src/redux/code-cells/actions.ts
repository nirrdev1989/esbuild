import {
    ActionsTypesNamesCodeCell,
    MoveCodeCellActionType,
    DeleteCodeCellActionType,
    UpdateCodeCellActionType,
    AddCodeCellActionType,
    ToggleEditorThemeActionType,
    UpdateCodeCellInfoActionType,
    SetCurrentCodeCellType
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

export function addCodeCell(id: string, title: string, description: string): AddCodeCellActionType {
    return {
        type: ActionsTypesNamesCodeCell.ADD_CODE_CELL,
        payload: {
            id: id,
            title: title,
            description: description
        }
    }
}

export function updateCodeCellInfo(id: string, title: string, description: string): UpdateCodeCellInfoActionType {
    return {
        type: ActionsTypesNamesCodeCell.UPDATE_CODE_CELL_INFO,
        payload: {
            id: id,
            title: title,
            description: description
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

export function setCurrentCodeCell(id: string, title: string, description: string): SetCurrentCodeCellType {
    return {
        type: ActionsTypesNamesCodeCell.SET_CURRENT_CODE_CELL,
        payload: {
            id: id,
            title: title,
            description: description
        }
    }
}

export function toggleEditorTheme(): ToggleEditorThemeActionType {
    return {
        type: ActionsTypesNamesCodeCell.TOGGLE_EDITOR_THEME,
    }
}