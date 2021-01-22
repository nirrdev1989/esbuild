import { OrderComponentName } from "./models";

export enum ActionsTypesNamesModal {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
    ORDER_COMPONENT = 'ORDER_COMPONENT'
}

export interface OpenModalActionType {
    type: ActionsTypesNamesModal.OPEN_MODAL
}

export interface CloseModalActionType {
    type: ActionsTypesNamesModal.CLOSE_MODAL
}

export interface ModalOrderComponentType {
    type: ActionsTypesNamesModal.ORDER_COMPONENT,
    payload: OrderComponentName
}

export type ModalActionsTypes =
    OpenModalActionType |
    CloseModalActionType |
    ModalOrderComponentType
