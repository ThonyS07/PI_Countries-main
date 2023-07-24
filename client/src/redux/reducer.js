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
	GET_ALL_ACTIVITIES,
	DELETE_ACTIVITY,
	FILTER_BY_ACTIVITY,

} from "./constants";

const initialState = {
	allCountries: [],
	countryBackUp: [],
	countriesDetail: [],
	allActivities: [],
	page: 1,
};

export default function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return {
				...state,
				allCountries: payload,
				countryBackUp: payload,
			};
		case COUNTRY_BY_ID:
			return {
				...state,
				countriesDetail: payload,
				loading: false,
			};
		case COUNTRY_BY_NAME:
			const foundCountry = [...state.countryBackUp].filter(
				(country) => country.name.toUpperCase() === payload.name.toUpperCase()
			);

			return {
				...state,
				allCountries: foundCountry,
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
			payload === "Ascending"
				? countriesOrderByName.sort((a, b) => a.name.localeCompare(b.name))
				: payload === "Descending"
				? countriesOrderByName.sort((a, b) => b.name.localeCompare(a.name))
				: (countriesOrderByName = [...state.allCountries]);
		
			return {
				...state,
				allCountries: [...countriesOrderByName],
			};
		case ORDER_BY_POPULATION:
			let orderCountriesByPopulation = [...state.allCountries];
			payload === "Ascending"
				? orderCountriesByPopulation.sort((a, b) => a.population - b.population)
				: payload === "Descending"
				? orderCountriesByPopulation.sort((a, b) => b.population - a.population)
				: (orderCountriesByPopulation = [...state.allCountries]);
			
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
					(country) => country.continent.toUpperCase() === payload.toUpperCase()
				),
			};
		case FILTER_BY_ACTIVITY:
			const activity = state.allActivities.find(
				(activity) => activity.name.toUpperCase() === payload.toUpperCase()
			);

			let countriesPerActivity = [];
			if (payload === "allActivities") {
				countriesPerActivity = [...state.countryBackUp];
			} else if (activity) {
				const activityCountryIds = activity.countries.map((countAct) =>
					countAct.id.toUpperCase()
				);
				countriesPerActivity = state.countryBackUp.filter((country) =>
					activityCountryIds.includes(country.id.toUpperCase())
				);
			}

			return {
				...state,
				allCountries: countriesPerActivity,
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
