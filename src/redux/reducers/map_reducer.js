import{ INITIAL_MAP } from '../../constants/action_types';
  
    const initialState = {
        initial_map: {}
    }
    
    export default (state = initialState, action) => {
        const payload = action.payload

        switch (action.type) {
            case INITIAL_MAP:
                return {
                    ...state,
                    initial_map: payload
                }       
        
            default:
                return state
        }
    }