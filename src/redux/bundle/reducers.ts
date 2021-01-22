import produce from "immer";
import { ActionsTypesNamesBundle, BundleActionsTypes } from "./actions.types";

interface BundleState {
    [key: string]: {
        loading: boolean
        code: string
        error: string
    } | undefined
}

const INITIAL_STATE: BundleState = {}

export const bundleReducer = produce((state: BundleState = INITIAL_STATE, action: BundleActionsTypes) => {
    switch (action.type) {
        case ActionsTypesNamesBundle.BUNDLE_START:
            state[action.payload.cellId] = {
                loading: true,
                code: '',
                error: ''
            }
            return state
        case ActionsTypesNamesBundle.BUNDLE_END:
            state[action.payload.cellId] = {
                loading: false,
                code: action.payload.bundle.code,
                error: action.payload.bundle.error
            }
            return state
        default:
            return state
    }
})