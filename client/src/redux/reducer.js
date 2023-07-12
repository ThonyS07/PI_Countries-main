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

const initialState = {
	allCountries: [],
	countryBackUp: [],
	countriesDetail: [],
	allActivities: [],
	activitiesBackUp: [],
	page: 1,
};

export default function rootReducer(state = initialState, {type,payload}) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return {
				...state,
				allCountries: payload,
				countryBackUp: payload,
			};
		case COUNTRY_BY_NAME:
			return {
				...state,
				countriesDetail: payload,
			};
		case SEARCH_COUNTRY:
			return {
				...state,
				allCountries: [...state.countryBackUp].filter((country) =>
					country.name.toUpperCase().includes(payload.toUpperCase())
				),
			};
		case CHANGE_PAGE:
			return {
				...state,
				page: payload,
			};
		case RESET_DETAIL:
			return {
				...state,
				countriesDetail: payload,
			};
		case RESET_COUNTRIES:
			return {
				...state,
				allCountries: [],
			};
		case ORDER_BY_NAME:
			let countriesOrderByName = [...state.allCountries];
			if (payload === "Ascending") {
				countriesOrderByName.sort((a, b) => a.name.localeCompare(b.name));
			} else if (payload === "Descending") {
				countriesOrderByName.sort((a, b) => b.name.localeCompare(a.name));
			} else if (payload === "allCountries") {
				countriesOrderByName = [...state.countryBackUp];
			}
			return {
				...state,
				allCountries: [...countriesOrderByName],
			};
		case ORDER_BY_POPULATION:
			let orderCountriesByPopulation = [...state.allCountries];
			if (payload === "Ascending") {
				orderCountriesByPopulation.sort((a, b) => a.population - b.population);
			} else if (payload === "Descending") {
				orderCountriesByPopulation.sort((a, b) => b.population - a.population);
			} else if (payload === "allCountries") {
				orderCountriesByPopulation = [...state.countryBackUp];
			}
			return {
				...state,
				allCountries: [...orderCountriesByPopulation],
			};
		case FILTER_BY_CONTINENT:
			if (payload === "allCountries") {
				return {
					...state,
					allCountries: [...state.countryBackUp],
				};
			}
			return {
				...state,
				allCountries: [...state.countryBackUp].filter(
					(country) =>
						country.continent.toUpperCase() === payload.toUpperCase()
				),
			};
		case GET_ALL_ACTIVITIES:
			return {
				...state,
				allActivities: payload,
				activitiesBackUp: payload,
			};
		case DELETE_ACTIVITY:
			return {
				...state,
				allActivities: [...state.allActivities].filter(
					(activity) => activity.name.toUpperCase() !== payload
				),
			};
		default:
			return { ...state };
	}
}