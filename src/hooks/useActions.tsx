import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCodeCell from "../redux/code-cells/actions";
import * as actionsBundle from "../redux/bundle/actions";
import * as actionsModal from "../redux/modal/actions";
import { useMemo } from "react";

export function useActionsCodeCell() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(actionsCodeCell, dispatch)
    }, [dispatch])
}

export function useActionsBundle() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(actionsBundle, dispatch)
    }, [dispatch])
}

export function useActionsModal() {
    const dispatch = useDispatch()
    return bindActionCreators(actionsModal, dispatch)
}