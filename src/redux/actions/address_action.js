import axios from "axios";
import { 
    GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE,
    SELECTED_INFO, GET_GEODATA_REQUEST, GET_GEODATA_SUCCESS, GET_GEODATA_FAILURE 
} from '../../constants/action_types';
import { 
    API_PHOTON, WEEK, WEEK_HOUR, QUERY13, QUERY14 
} from '../../constants/apis';


export function searchAddress(address, selected_day) {
    return async (dispatch, getState) => {
        dispatch({ type: GET_ADDRESS_REQUEST });
        try {
            const response = await axios.get(API_PHOTON+address);
            dispatch({ type: GET_ADDRESS_SUCCESS, payload: response });
            const { info_address } = getState().address;
            const long_address = info_address[0].lon; // CUANDO tenga el suggestions cambiar esto
            const lat_address = info_address[0].lat; // CUANDO tenga el suggestions cambiar esto
            const coord_address = { lat_address: lat_address, long_address: long_address }
            const point_address = 'POINT(' + long_address + ' ' + lat_address + ')';
            const day = parseInt(selected_day, 10);
            
            if(day === 0){         
                const params = 'COORD:' + point_address;
                const query1 = WEEK+params;
                const query2 = WEEK_HOUR+params;
                const query3 = QUERY13+params;
                const geo_url = [query1,query2,query3];
                const selected_info = { coord_address: coord_address, point_address: point_address, selected_day: day, geo_url: geo_url };
                dispatch({ type: SELECTED_INFO, payload: selected_info });
                dispatch(getPolygon(geo_url));
    
            }else if(day > 0){
                const viewparams = ['COORD:' + point_address, 'DAY:' + day];
                const params = viewparams.join(';');
                const geo_url = [QUERY14+params];
                const selected_info = { coord_address: coord_address, point_address: point_address, selected_day: day, geo_url: geo_url };
                dispatch({ type: SELECTED_INFO, payload: selected_info });
                dispatch(getPolygon(geo_url));
            }           

        } catch (error) {
            dispatch({ type: GET_ADDRESS_FAILURE, payload: error });
        }
    }
}

function getPolygon(geoURL){
    return async (dispatch) => {
        dispatch({ type: GET_GEODATA_REQUEST });
        try {
            const geo_url_len = Object.keys(geoURL).length;
            if(geo_url_len === 1){
                const geodata = await axios.get(geoURL);
                dispatch({ type: GET_GEODATA_SUCCESS, payload: geodata.data });   
            }else if(geo_url_len > 1){
                const bar = await axios.get(geoURL[0]);
                const line = await axios.get(geoURL[1]);
                const area = await axios.get(geoURL[2]);
                const geodata = {
                    bar: bar.data,
                    line: line.data,
                    area: area.data                
                }               
                dispatch({ type: GET_GEODATA_SUCCESS, payload: geodata });
            }

        } catch (error) {
            dispatch({ type: GET_GEODATA_FAILURE, payload: error });
        }
    }
}