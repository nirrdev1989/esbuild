import { ActionsTypesNamesModal, ModalActionsTypes } from "./actions.types";
import { OrderComponentName } from "./models";


interface ModalState {
    isOpen: boolean
    orderComponent: OrderComponentName
}

const INITIAL_STATE: ModalState = {
    isOpen: false,
    orderComponent: 'NULL'
}

export function modalRducer(state: ModalState = INITIAL_STATE, action: ModalActionsTypes) {
    switch (action.type) {
        case ActionsTypesNamesModal.OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case ActionsTypesNamesModal.CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
            }
        case ActionsTypesNamesModal.ORDER_COMPONENT:
            return {
                ...state,
                orderComponent: action.payload
            }
        default:
            return state
    }
}