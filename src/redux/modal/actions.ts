import { ActionsTypesNamesModal, CloseModalActionType, ModalOrderComponentType, OpenModalActionType } from "./actions.types";
import { OrderComponentName } from "./models";

export function openModalAction(): OpenModalActionType {
    return {
        type: ActionsTypesNamesModal.OPEN_MODAL
    }
}

export function closeModalAction(): CloseModalActionType {
    return {
        type: ActionsTypesNamesModal.CLOSE_MODAL
    }
}

export function modalOrderComponent(componentName: OrderComponentName): ModalOrderComponentType {
    return {
        type: ActionsTypesNamesModal.ORDER_COMPONENT,
        payload: componentName
    }
}