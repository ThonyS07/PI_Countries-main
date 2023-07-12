import {
	GET_ALL_COUNTRIES,
	COUNTRY_BY_NAME,
	SEARCH_COUNTRY,
	CHANGE_PAGE,
	RESET_DETAIL,
	ORDER_BY_NAME,
	RESET_COUNTRIES,
	ORDER_BY_POPULATION,
	FILTER_BY_CONTINENT,
	GET_ALL_ACTIVITIES,
	DELETE_ACTIVITY,
} from "./constants";

import axios from "axios";

const API_URL = "http://localhost:3001/pi";

export const getAllCountries = ()=> {
	const endpoint = `${API_URL}/countries/all`;
	return (dispatch) => {
		axios(endpoint).then(({ data }) => {
			return dispatch({
				type: GET_ALL_COUNTRIES,
				payload: data,
			});
		});
	};
};

export const countryDetail = (id) => {
	const endpoint = `${API_URL}/countries/${id}`;
	return (dispatch) => {
		axios(endpoint).then(({ data }) => {
			return dispatch({
				type: COUNTRY_BY_NAME,
				payload: data,
			});
		});
	};
};

export const searchCountry = (name) => {
	return {
		type: SEARCH_COUNTRY,
		payload: name,
	};
};

// export const changePage = (page) => {
// 	return {
// 		type: CHANGE_PAGE,
// 		payload: page,
// 	};
// };

// export const resetDetail = () => {
// 	return {
// 		type: RESET_DETAIL,
// 		payload: [],
// 	};
// };
export const resetCountries = () => {
	return {
		type: RESET_COUNTRIES,
	};
};

// export const orderCountriesByname = (order) => {
// 	return {
// 		type: ORDER_BY_NAME,
// 		payload: order,
// 	};
// };
// export const orderCountriesByPopulation = (order) => {
// 	return {
// 		type: ORDER_BY_POPULATION,
// 		payload: order,
// 	};
// };
// export const filteredByContinent = (filter) => {
// 	return {
// 		type: FILTER_BY_CONTINENT,
// 		payload: filter,
// 	};
// };

// export const addActivity = (activity) => {
// 	return async function () {
// 		const response = await axios.post(`${API_URL}/activities`, activity);
// 		return response;
// 	};
// };

// export const getAllActivities = () => {
// 	return function (dispatch) {
// 		return fetch(API_URL + "/activities")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				dispatch({
// 					type: GET_ALL_ACTIVITIES,
// 					payload: data,
// 				});
// 			});
// 	};
// };

// export const deleteActivity = (activity) => {
// 	return async function (dispatch) {
// 		try {
// 			await axios.delete(`${API_URL}/activities/${activity}`);
// 			dispatch({
// 				type: DELETE_ACTIVITY,
// 				payload: activity,
// 			});
// 		} catch (error) {
// 			alert({ msg: error });
// 		}
// 	};
// };
