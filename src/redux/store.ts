import { createStore, combineReducers, applyMiddleware } from "redux";
import { codeCellReducer } from "./code-cells/reducers";
import { logger } from "redux-logger";
import { ActionsTypesNamesCodeCell } from "./code-cells/actions.types";
import { bundleReducer } from "./bundle/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    codeCell: codeCellReducer,
    bundle: bundleReducer
})

const middeleWeres = [logger, thunk]

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(...middeleWeres)
)

store.dispatch({
    type: ActionsTypesNamesCodeCell.ADD_CODE_CELL,
    payload: {
        id: null,
    }
})




