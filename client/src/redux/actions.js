import {
	GET_ALL_COUNTRIES,
	COUNTRY_BY_ID,
	COUNTRY_BY_NAME,
	CHANGE_PAGE,
	RESET_DETAIL,
	ORDER_BY_NAME,
	RESET_COUNTRIES,
	ORDER_BY_POPULATION,
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY,
	GET_ALL_ACTIVITIES,
	DELETE_ACTIVITY,
	FAILURE,
	LOADING
} from "./constants";

import axios from "axios";

const SERVER_URL = "http://localhost:3001/pi";

export const getAllCountries = () => {
	const endpoint = `${SERVER_URL}/countries/all`;
	return async (dispatch) => {
		try{
		await axios(endpoint).then(({ data }) => {
			return dispatch({
				type: GET_ALL_COUNTRIES,
				payload: data,
			});
		});
			} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: error.response.data.msg,
			});
		}
	};
};

export const countryDetail = (id) => {
	const endpoint = `${SERVER_URL}/countries/${id}`;
	return async (dispatch) => {
		try {
			  dispatch({
					type: LOADING,
				});
		await axios(endpoint).then(({ data }) => {
			return dispatch({
				type: COUNTRY_BY_ID,
				payload: data,
			});
		});
			} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: error.response.data.msg,
			});
		}
	};
};

export const searchCountry = (name) => {
	const endpoint = `${SERVER_URL}/countries?name=${name}`;
	return async (dispatch) => {
		try {
			await axios(endpoint).then(({ data }) => {
				return dispatch({
					type: COUNTRY_BY_NAME,
					payload: data,
				});
			});
		} catch (error ) {
			return dispatch({
				type: FAILURE,
				payload:error.msg,
			});
		}
	};
};


export const changePage = (page) => {
	return {
		type: CHANGE_PAGE,
		payload: page,
	};
};

export const resetDetail = () => {
	return {
		type: RESET_DETAIL,
		payload: [],
	};
};
export const resetCountries = () => {
	return {
		type: RESET_COUNTRIES,
	};
};

export const orderCountriesByName = (order) => {
	return {
		type: ORDER_BY_NAME,
		payload: order,
	};
};

export const orderCountriesByPopulation = (order) => {
	return {
		type: ORDER_BY_POPULATION,
		payload: order,
	};
};

export const filterByContinent = (filter) => {
	return {
		type: FILTER_BY_CONTINENT,
		payload: filter,
	};
};
export const filterByActivity = (filter) => {
	return {
		type: FILTER_BY_ACTIVITY,
		payload: filter,
	};
};

export const addActivity = (activity) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${SERVER_URL}/activities`, activity);
			return response;
		} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: error.msg,
			});
		}
	};
};

export const getAllActivities = () => {
	const endpoint = `${SERVER_URL}/activities`;
	return async (dispatch) => {
		try {
			await axios(endpoint).then(({ data }) => {
				return dispatch({
					type: GET_ALL_ACTIVITIES,
					payload: data,
				});
			});
		} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: error.msg,
			});
		}
	};
};

export const deleteActivity = (activity) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${SERVER_URL}/activities/${activity}`);
			dispatch({
				type: DELETE_ACTIVITY,
				payload: activity,
			});
		} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: error.msg,
			});
		}
	};
};
