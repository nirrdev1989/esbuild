import { BundleResult } from "./models";

export enum ActionsTypesNamesBundle {
    BUNDLE_START = 'BUNDLE_START',
    BUNDLE_END = 'BUNDLE_END',
}

export interface BundleStartActionType {
    type: ActionsTypesNamesBundle.BUNDLE_START
    payload: {
        cellId: string
    }
}

export interface BundleEndActionType {
    type: ActionsTypesNamesBundle.BUNDLE_END
    payload: {
        cellId: string
        bundle: BundleResult
    }
}

export type BundleActionsTypes =
    BundleStartActionType |
    BundleEndActionType