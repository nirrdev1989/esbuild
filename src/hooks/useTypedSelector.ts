import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store";

export const usetTypedSelector: TypedUseSelectorHook<RootState> = useSelector

