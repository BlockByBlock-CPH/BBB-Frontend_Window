import axios from "axios";
import { 
    SELECTED_INFO, 
    GET_MAIN_CHART_REQUEST, GET_MAIN_CHART_SUCCESS, GET_MAIN_CHART_FAILURE,
    GET_TABLE_HOME_REQUEST,GET_TABLE_HOME_SUCCESS, GET_TABLE_HOME_FAILURE,
    GET_TOP_REQUEST, GET_TOP_SUCCESS, GET_TOP_FAILURE,
    GET_AREA_INFLUENCE_REQUEST, GET_AREA_INFLUENCE_SUCCESS, GET_AREA_INFLUENCE_FAILURE,
    GET_HOMEZONE_WHEEL_REQUEST, GET_HOMEZONE_WHEEL_SUCCESS, GET_HOMEZONE_WHEEL_FAILURE
} from '../../constants/action_types';
import { 
    MAIN_CHART_WEEK, MAIN_CHART_DAY, TOP_CHART1_WEEK, TOP_CHART2_WEEK, TOP_CHART1_DAY, TOP_CHART2_DAY,
    TABLEHOME_WEEK, TABLEHOME_DAY, AREA_INFLUENCE_WEEK, AREA_INFLUENCE_DAY, HOMEZONE_WHEEL
} from '../../constants/apis';


export function setChosenLocation(data, selectedDay){
    return (dispatch) => {              
        const chosenLocation = data;
        const longAddress = chosenLocation.longitude;
        const latAddress = chosenLocation.latitude;
        const coordAddress = { latAddress: latAddress, longAddress: longAddress }
        const pointAddress = 'POINT(' + longAddress + ' ' + latAddress + ')';
        const day = parseInt(selectedDay, 10);
        
        if(day === 0){         
            const topChart = [TOP_CHART1_WEEK,TOP_CHART2_WEEK];
            const selectedInfo = { 
                coordAddress: coordAddress, 
                pointAddress: pointAddress, 
                selectedDay: day
            };
            dispatch({ type: SELECTED_INFO, payload: selectedInfo });
            dispatch(getDataMainChart(MAIN_CHART_WEEK));
            dispatch(getDataTableHome(`${TABLEHOME_WEEK}/${longAddress}/${latAddress}`));
            dispatch(getDataTop(topChart));
            dispatch(getAreaInfluence(`${AREA_INFLUENCE_WEEK}/${longAddress}/${latAddress}`));
            dispatch(getHomeZoneWheelPlot(''));

        }else if(day > 0){
            const topChart = [`${TOP_CHART1_DAY}/${day}`,`${TOP_CHART2_DAY}/${day}`];
            const selectedInfo = { 
                coordAddress: coordAddress, 
                pointAddress: pointAddress, 
                selectedDay: day
            };
            dispatch({ type: SELECTED_INFO, payload: selectedInfo });
            dispatch(getDataMainChart(MAIN_CHART_DAY));
            dispatch(getDataTableHome(`${TABLEHOME_DAY}/${longAddress}/${latAddress}/${day}`));
            dispatch(getDataTop(topChart));
            dispatch(getAreaInfluence(`${AREA_INFLUENCE_DAY}/${longAddress}/${latAddress}/${day}`));
            dispatch(getHomeZoneWheelPlot(`${HOMEZONE_WHEEL}/${longAddress}/${latAddress}/${day}`));
        }
    }
}

function getDataMainChart(API_Url){
    return async (dispatch) => {
        dispatch({ type: GET_MAIN_CHART_REQUEST });
        try {
            const mainChart = await axios.get(API_Url);
            dispatch({ type: GET_MAIN_CHART_SUCCESS, payload: mainChart.data });   
        } catch (error) {
            dispatch({ type: GET_MAIN_CHART_FAILURE, payload: error });
        }
    }
}

function getDataTableHome(API_Url){
    return async (dispatch) => {
        dispatch({ type: GET_TABLE_HOME_REQUEST });
        try {
            const tableHome = await axios.get(API_Url);
            dispatch({ type: GET_TABLE_HOME_SUCCESS, payload: tableHome.data });   
        } catch (error) {
            dispatch({ type: GET_TABLE_HOME_FAILURE, payload: error });
        }
    }
}

function getDataTop(API_Url){
    return async (dispatch) => {
        dispatch({ type: GET_TOP_REQUEST });
        try {
            const chart1 = await axios.get(API_Url[0]);
            const chart2 = await axios.get(API_Url[1]);
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

function getAreaInfluence(API_Url){
    return async (dispatch) => {
        dispatch({ type: GET_AREA_INFLUENCE_REQUEST });
        try {
            const areaInfluence = await axios.get(API_Url);
            dispatch({ type: GET_AREA_INFLUENCE_SUCCESS, payload: areaInfluence.data });   
        } catch (error) {
            dispatch({ type: GET_AREA_INFLUENCE_FAILURE, payload: error });
        }
    }
}

function getHomeZoneWheelPlot(API_Url){
    const lenURL = parseInt(API_Url.length,10);
    return async (dispatch) => {
        dispatch({ type: GET_HOMEZONE_WHEEL_REQUEST });
        try {
            if(lenURL > 0){
                const dataHomeZoneWheel = await axios.get(API_Url);
                dispatch({ type: GET_HOMEZONE_WHEEL_SUCCESS, payload: dataHomeZoneWheel.data });
            }else {
                dispatch({ type: GET_HOMEZONE_WHEEL_SUCCESS, payload: {} });
            }
        } catch (error) {
            dispatch({ type: GET_HOMEZONE_WHEEL_FAILURE, payload: error });
        }
    }
}