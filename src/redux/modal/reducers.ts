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
        case ActionsTypesNamesModal.OPEN_MODAL_WITH_ORDER_COMPONENT:
            return {
                orderComponent: action.payload,
                isOpen: true
            }
        case ActionsTypesNamesModal.CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state
    }
}