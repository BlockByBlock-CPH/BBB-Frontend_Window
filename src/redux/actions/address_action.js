import axios from "axios";
import { 
    GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE,
    SELECTED_INFO, GET_MAIN_CHART_REQUEST, GET_MAIN_CHART_SUCCESS, GET_MAIN_CHART_FAILURE,
    GET_TABLE_HOME_REQUEST,GET_TABLE_HOME_SUCCESS, GET_TABLE_HOME_FAILURE,
    GET_TOP_REQUEST, GET_TOP_SUCCESS, GET_TOP_FAILURE
} from '../../constants/action_types';
import { 
    API_PHOTON, WEEK, QUERY14, QUERY_1_2, QUERY_3_4, QUERY17, QUERY18, QUERY17_2, QUERY18_2
} from '../../constants/apis';


export function searchAddress(address, selectedDay) {
    return async (dispatch, getState) => {
        dispatch({ type: GET_ADDRESS_REQUEST });
        try {
            const response = await axios.get(API_PHOTON+address);
            dispatch({ type: GET_ADDRESS_SUCCESS, payload: response });
            
            const { infoAddress } = getState().address;
            const longAddress = infoAddress[0].lon;  // TODO: CUANDO tenga el suggestions cambiar esto
            const latAddress = infoAddress[0].lat;  // TODO: CUANDO tenga el suggestions cambiar esto
            const coordAddress = { latAddress: latAddress, longAddress: longAddress }
            const pointAddress = 'POINT(' + longAddress + ' ' + latAddress + ')';
            const day = parseInt(selectedDay, 10);
            
            if(day === 0){         
                const params = 'COORD:' + pointAddress;
                const mainChart = WEEK+params;
                const tableHome = QUERY_3_4+params;
                const topChart = [QUERY17,QUERY18];
                // const query2 = WEEK_HOUR+params;
                // const query3 = QUERY13+params;
                // const url_main_chart = [main_chart];
                const selectedInfo = { 
                    coordAddress: coordAddress, 
                    pointAddress: pointAddress, 
                    selectedDay: day, 
                    mainChart: mainChart,
                    tableHome: tableHome,
                    topChart: topChart
                };
                dispatch({ type: SELECTED_INFO, payload: selectedInfo });
                dispatch(getDataMainChart(mainChart));
                dispatch(getDataTableHome(tableHome));
                dispatch(getDataTop(topChart));
    
            }else if(day > 0){
                const viewparams = ['COORD:' + pointAddress, 'DAY:' + day];
                const params = viewparams.join(';');
                const mainChart = QUERY14+params;
                const tableHome = QUERY_1_2+params;
                const topChart = [QUERY17_2+'DAY:' + day,QUERY18_2+'DAY:' + day];
                const selectedInfo = { 
                    coordAddress: coordAddress, 
                    pointAddress: pointAddress, 
                    selectedDay: day, 
                    mainChart: mainChart,
                    tableHome: tableHome,
                    topChart: topChart
                };
                dispatch({ type: SELECTED_INFO, payload: selectedInfo });
                dispatch(getDataMainChart(mainChart));
                dispatch(getDataTableHome(tableHome));
                dispatch(getDataTop(topChart));
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
            const mainChart = await axios.get(geoURL);
            dispatch({ type: GET_MAIN_CHART_SUCCESS, payload: mainChart.data });   
        } catch (error) {
            dispatch({ type: GET_MAIN_CHART_FAILURE, payload: error });
        }
    }
}

function getDataTableHome(geoURL){
    return async (dispatch) => {
        dispatch({ type: GET_TABLE_HOME_REQUEST });
        try {
            const tableHome = await axios.get(geoURL);
            dispatch({ type: GET_TABLE_HOME_SUCCESS, payload: tableHome.data });   
        } catch (error) {
            dispatch({ type: GET_TABLE_HOME_FAILURE, payload: error });
        }
    }
}


function getDataTop(geoURL){
    return async (dispatch) => {
        dispatch({ type: GET_TOP_REQUEST });
        try {
            const chart1 = await axios.get(geoURL[0]);
            const chart2 = await axios.get(geoURL[1]);
            const dataTop = {
                chart1: chart1.data, 
                chart2: chart2.data
            };
            
            dispatch({ type: GET_TOP_SUCCESS, payload: dataTop });   
        } catch (error) {
            dispatch({ type: GET_TOP_FAILURE, payload: error });
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