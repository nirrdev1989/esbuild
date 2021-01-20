import { CodeCellMoveType } from "./models";

export enum ActionsTypesNamesCodeCell {
    MOVE_CODE_CELL = 'MOVE_CODE_CELL',
    DELETE_CODE_CELL = 'DELETE_CODE_CELL',
    ADD_CODE_CELL = 'ADD_CODE_CELL',
    UPDATE_CODE_CELL = 'UPDATE_CODE_CELL',
    TOGGLE_EDITOR_THEME = 'TOGGLE_EDITOR_THEME'
}


export interface MoveCodeCellActionType {
    type: ActionsTypesNamesCodeCell.MOVE_CODE_CELL
    payload: {
        id: string,
        direction: CodeCellMoveType
    }
}

export interface DeleteCodeCellActionType {
    type: ActionsTypesNamesCodeCell.DELETE_CODE_CELL
    payload: string
}

export interface AddCodeCellActionType {
    type: ActionsTypesNamesCodeCell.ADD_CODE_CELL
    payload: {
        id: string | null
    }
}

export interface UpdateCodeCellActionType {
    type: ActionsTypesNamesCodeCell.UPDATE_CODE_CELL
    payload: {
        id: string
        content: string
    }
}

export interface ToggleEditorThemeActionType {
    type: ActionsTypesNamesCodeCell.TOGGLE_EDITOR_THEME
}

export type CodeCellActionsTypes =
    MoveCodeCellActionType |
    AddCodeCellActionType |
    UpdateCodeCellActionType |
    DeleteCodeCellActionType |
    ToggleEditorThemeActionType