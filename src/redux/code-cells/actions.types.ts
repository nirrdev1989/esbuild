import { CodeCellInfo, CodeCellMoveType } from "./models";

export enum ActionsTypesNamesCodeCell {
    MOVE_CODE_CELL = 'MOVE_CODE_CELL',
    DELETE_CODE_CELL = 'DELETE_CODE_CELL',
    ADD_CODE_CELL = 'ADD_CODE_CELL',
    UPDATE_CODE_CELL = 'UPDATE_CODE_CELL',
    TOGGLE_EDITOR_THEME = 'TOGGLE_EDITOR_THEME',
    UPDATE_CODE_CELL_INFO = 'UPDATE_CODE_CELL_INFO',
    SET_CURRENT_CODE_CELL = 'SET_CURRENT_CODE_CELL'
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
    payload: CodeCellInfo
}

export interface UpdateCodeCellActionType {
    type: ActionsTypesNamesCodeCell.UPDATE_CODE_CELL
    payload: {
        id: string
        content: string
    }
}

export interface UpdateCodeCellInfoActionType {
    type: ActionsTypesNamesCodeCell.UPDATE_CODE_CELL_INFO
    payload: CodeCellInfo
}

export interface SetCurrentCodeCellType {
    type: ActionsTypesNamesCodeCell.SET_CURRENT_CODE_CELL
    payload: {
        id: string
        title: string
        description: string
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
    UpdateCodeCellInfoActionType |
    SetCurrentCodeCellType |
    ToggleEditorThemeActionType 