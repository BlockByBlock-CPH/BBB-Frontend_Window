import{ 
    GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE, SELECTED_INFO,
    GET_GEODATA_REQUEST, GET_GEODATA_SUCCESS, GET_GEODATA_FAILURE

} from '../../constants/action_types';
  
  const initialState = {
      info_address: {},
      selected_info: null,
      geodata: {},
      loading: false,
      loaded: false,
      error: null
    }
    
    export default (state = initialState, action) => {
        const payload = action.payload

        switch (action.type) {
            case GET_ADDRESS_REQUEST:    
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
    
            case GET_ADDRESS_SUCCESS:
                return {
                    ...state,
                    info_address: payload.data.features.map(res => {
                        return {
                            lon:res.geometry.coordinates[0],
                            lat:res.geometry.coordinates[1],
                            address:{
                                name:res.properties.name,
                                street: res.properties.street,
                                housenumber: res.properties.housenumber,
                                postcode:res.properties.postcode,
                                city:res.properties.city,
                                state:res.properties.state,
                                country:res.properties.country
                            },
                            original:{
                                formatted:res.properties.name,
                                details:res.properties
                            }
                        }
                    }),
                    loading: false,
                    loaded: true,
                    error: null
                }   
    
            case GET_ADDRESS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: payload
                }

            case SELECTED_INFO:
                return {
                    ...state,
                    selected_info: payload
                }       
            
                case GET_GEODATA_REQUEST:    
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
    
            case GET_GEODATA_SUCCESS:
                return {
                    ...state,
                    geodata: payload,
                    loading: false,
                    loaded: true,
                    error: null
                }   
    
            case GET_GEODATA_FAILURE:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: payload
                }
    
            default:
                return state
        }
    }