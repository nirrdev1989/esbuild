import { ActionsTypesNamesModal, CloseModalActionType, OpenModalWithOrderComponentActionType } from "./actions.types";
import { OrderComponentName } from "./models";



export function closeModalAction(): CloseModalActionType {
    return {
        type: ActionsTypesNamesModal.CLOSE_MODAL
    }
}

export function openModalWithOrderComponent(componentName: OrderComponentName): OpenModalWithOrderComponentActionType {
    return {
        type: ActionsTypesNamesModal.OPEN_MODAL_WITH_ORDER_COMPONENT,
        payload: componentName
    }
}

