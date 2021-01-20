import { Dispatch } from "redux";
import bundler from "../../bundler";
import { ActionsTypesNamesBundle, BundleActionsTypes } from "./actions.types";


export function createBubdle(cellId: string, input: string) {
   return async function (dispatch: Dispatch<BundleActionsTypes>) {
      dispatch({
         type: ActionsTypesNamesBundle.BUNDLE_START,
         payload: {
            cellId: cellId
         }
      })

      const result = await bundler(input)

      dispatch({
         type: ActionsTypesNamesBundle.BUNDLE_END,
         payload: {
            cellId: cellId,
            bundle: result
         }
      })
   }
}