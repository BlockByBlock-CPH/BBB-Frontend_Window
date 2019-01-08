import { createSelector } from 'reselect';

// selectors
const getCoordAddress = (address) => address.selectedInfo.coordAddress;
const getMainChart = (address) => address.mainChart;
const getSelectedDay = (address) => address.selectedInfo.selectedDay;
const getTableHome = (address) => address.tableHome;
const getDataTop = (address) => address.dataTop;
const getAreaInfluence = (address) => address.areaInfluence;

// reselect functions
export const getCoordAddressState = createSelector(
  [ getCoordAddress ],
  (coordAddress) => coordAddress
)

export const getMainChartState = createSelector(
  [ getMainChart ],
  (mainChart) => mainChart
)

export const getSelectedDayState = createSelector(
  [ getSelectedDay ],
  (selectedDay) => selectedDay
)

export const getTableHomeState = createSelector(
  [ getTableHome ],
  (tableHome) => tableHome
)

export const getDataTopState = createSelector(
  [ getDataTop ],
  (dataTop) => dataTop
)

export const getAreaInfluenceState = createSelector(
  [ getAreaInfluence ],
  (areaInfluence) => areaInfluence
)