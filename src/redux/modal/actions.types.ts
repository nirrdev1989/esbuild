import { OrderComponentName } from "./models";

export enum ActionsTypesNamesModal {
    OPEN_MODAL_WITH_ORDER_COMPONENT = 'OPEN_MODAL_WITH_ORDER_COMPONENT',
    CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface OpenModalWithOrderComponentActionType {
    type: ActionsTypesNamesModal.OPEN_MODAL_WITH_ORDER_COMPONENT
    payload: OrderComponentName
}

export interface CloseModalActionType {
    type: ActionsTypesNamesModal.CLOSE_MODAL
}

export type ModalActionsTypes =
    OpenModalWithOrderComponentActionType |
    CloseModalActionType

