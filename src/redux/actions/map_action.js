import { INITIAL_MAP } from '../../constants/action_types';


export function setInitMap(map, view, base_layer) {
    return (dispatch) => {
        const initital_map = {
            view: view,
            base_layer: base_layer,
            map: map
        }
        dispatch({ type: INITIAL_MAP, payload: initital_map });
    }
}