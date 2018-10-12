import axios from "axios";
import { 
    GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE,
    SELECTED_INFO, GET_MAIN_CHART_REQUEST, GET_MAIN_CHART_SUCCESS, GET_MAIN_CHART_FAILURE,
    GET_TABLE_HOME_REQUEST,GET_TABLE_HOME_SUCCESS, GET_TABLE_HOME_FAILURE
} from '../../constants/action_types';
import { 
    API_PHOTON, WEEK, QUERY14, QUERY_1_2, QUERY_3_4  
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
                const main_chart = WEEK+params;
                const table_home = QUERY_3_4+params;
                // const query2 = WEEK_HOUR+params;
                // const query3 = QUERY13+params;
                // const url_main_chart = [main_chart];
                const selected_info = { 
                    coord_address: coord_address, 
                    point_address: point_address, 
                    selected_day: day, 
                    main_chart: main_chart,
                    table_home: table_home
                };
                dispatch({ type: SELECTED_INFO, payload: selected_info });
                dispatch(getDataMainChart(main_chart));
                dispatch(getDataTableHome(table_home));
    
            }else if(day > 0){
                const viewparams = ['COORD:' + point_address, 'DAY:' + day];
                const params = viewparams.join(';');
                const main_chart = QUERY14+params;
                const table_home = QUERY_1_2+params;
                const selected_info = { 
                    coord_address: coord_address, 
                    point_address: point_address, 
                    selected_day: day, 
                    main_chart: main_chart,
                    table_home: table_home
                };
                dispatch({ type: SELECTED_INFO, payload: selected_info });
                dispatch(getDataMainChart(main_chart));
                dispatch(getDataTableHome(table_home));
            }           

        } catch (error) {
            dispatch({ type: GET_ADDRESS_FAILURE, payload: error });
        }
    }
}


function getDataMainChart(geoURL){
    return async (dispatch) => {
        dispatch({ type: GET_MAIN_CHART_REQUEST });
        try {
            const main_chart = await axios.get(geoURL);
            dispatch({ type: GET_MAIN_CHART_SUCCESS, payload: main_chart.data });   
        } catch (error) {
            dispatch({ type: GET_MAIN_CHART_FAILURE, payload: error });
        }
    }
}

function getDataTableHome(geoURL){
    return async (dispatch) => {
        dispatch({ type: GET_TABLE_HOME_REQUEST });
        try {
            const table_home = await axios.get(geoURL);
            dispatch({ type: GET_TABLE_HOME_SUCCESS, payload: table_home.data });   
        } catch (error) {
            dispatch({ type: GET_TABLE_HOME_FAILURE, payload: error });
        }
    }
}








// function getPolygon(geoURL){
//     return async (dispatch) => {
//         dispatch({ type: GET_GEODATA_REQUEST });
//         try {
//             const geo_url_len = Object.keys(geoURL).length;
//             if(geo_url_len === 1){
//                 const geodata = await axios.get(geoURL);
//                 dispatch({ type: GET_GEODATA_SUCCESS, payload: geodata.data });   
//             }else if(geo_url_len > 1){
//                 const geodata = await axios.get(geoURL[0]);
//                 const line = await axios.get(geoURL[1]);
//                 const area = await axios.get(geoURL[2]);
//                 const geodata = {
//                     bar: bar.data,
//                     line: line.data,
//                     area: area.data                
//                 }               
//                 dispatch({ type: GET_GEODATA_SUCCESS, payload: geodata });
//             }

//         } catch (error) {
//             dispatch({ type: GET_GEODATA_FAILURE, payload: error });
//         }
//     }
// }