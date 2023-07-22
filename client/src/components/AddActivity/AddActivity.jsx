import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getAllCountries } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from "./AddActivity.module.css";
// import image from "../../assets/img/tourist.jpg";
import Select from "react-select";
import swal from "sweetalert2";

const AddActivity = () => {
	const validation = (input) => {
		let errors = {};
		if (input.name.length === 0) errors.name = "Required field";
		if (input.difficulty.length === 0) errors.difficulty = "Required field";
		if (input.duration.length === 0) errors.duration = "Required field";
		if (input.season.length === 0) errors.season = "Required field";
		if (input.difficulty < 0 || input.difficulty > 5)
			errors.difficulty = "The difficulty must be between 1 and 5";
		if (input.duration === 0 || input.duration > 24)
			errors.duration = "The duration must be between 1hr and 24hr";

		return errors;
	};

	const dispatch = useDispatch();
	const allCountries = useSelector((state) => state.allCountries);
	const navigate = useNavigate();
	const [Activity, setActivity] = useState({
		name: "",
		difficulty: 0,
		duration: 0,
		season: "",
		cId: [],
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	// console.log(Activity);

	const handleInputChange = (e) => {
		setErrors(
			validation({
				...Activity,
				[e.target.name]: e.target.value,
			})
		);

		setActivity({
			...Activity,
			[e.target.name]: e.target.value,
		});
	};

	const handleInputChange2 = (e) => {
		setActivity({
			...Activity,
			season: e.target.value,
		});
	};

	const addMoreCountries = (e) => {
		setActivity({
			...Activity,
			cId: e.map((country) => country.value),
		});
	};

	const handleSubmit = (e) => {
		if (
			!Activity.name ||
			!Activity.duration ||
			!Activity.difficulty ||
			!Activity.season ||
			!Activity.cId.length
		) {
			return alert("Complete all the fields");
		} else {
			swal.fire({
				tittle: "ACTIVITY CREATED",
				text: "the activity has been created successfully",
				icon: "success",
				buttons: "OK",
			});
			dispatch(addActivity(Activity));
			navigate("/Countries");
		}
	};

	console.log(Activity);

	return (
		<div className={styles.content}>
			{/* <img alt='tourist' src={image} className={styles.img}></img> */}
			<div className={styles.AddActivity}>
				<h1 className={styles.tittle}>Create a new tourist activity</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className={styles.labels}>Name: </label>
						<input
							type='text'
							name='name'
							value={Activity.name}
							onChange={handleInputChange}
							className={styles.inputs}
							placeholder='Insert activity name'></input>
						<br />
						{errors.name && <p className={styles.errors}>{errors.name}</p>}
					</div>
					<div>
						<label className={styles.labels}>Difficulty: </label>
						<input
							type='number'
							name='difficulty'
							min='1'
							max='5'
							onChange={handleInputChange}
							className={styles.inputs}
							placeholder='Insert difficulty level'></input>
						<br />
						{errors.difficulty && (
							<p className={styles.errors}>{errors.difficulty}</p>
						)}
					</div>
					<div>
						<label className={styles.labels}>Duration: </label>
						<input
							type='number'
							name='duration'
							min='1'
							max='24'
							onChange={handleInputChange}
							className={styles.inputs}
							placeholder='Insert number of hours'></input>
						<br />
						{errors.duration && (
							<p className={styles.errors}>{errors.duration}</p>
						)}
					</div>
					<div>
						<select
							onChange={handleInputChange2}
							name='seasons'
							className={styles.selector2}>
							<option value=''>
								Select season
							</option>
							<option value='All seasons'>All seasons</option>
							<option value='Summer'>Summer</option>
							<option value='Spring'>Spring</option>
							<option value='Autumn'>Autumn</option>
							<option value='Winter'>Winter</option>
						</select>
						<br />
						{errors.season && <p className={styles.errors}>{errors.season}</p>}
					</div>
					<div>
						<label className={styles.labels2}>Select countries</label>
						<Select
							onChange={addMoreCountries}
							options={allCountries.map((country) => ({
								label: country.name,
								value: country.id,
							}))}
							isMulti
							className={styles.selector}
						/>
					</div>
					{/* <div>
                    <select onChange={addMoreCountries} name="countries" className={styles.selector}>
                        <option value="" selected disabled hidden>
                            Select countries
                        </option>
                        {allCountries.map(country =>
                            <option value={country.name}>{country.name}</option>
                        )}
                    </select>
                </div>
                <div className={styles.list}>
                    {Activity.countries?.length?  Activity.countries.map(country =>
                        <li className={styles.countries}>{country}
                        <button 
                        onClick={e => deleteCountrie(e.target.value)} 
                        value={country}
                        className={styles.cancel}>X</button>
                        </li>
                    ):""}
                </div> */}
					<button type='submit' className={styles.submit}>
						Post activity
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddActivity;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { useHistory } from "react-router-dom";
// import { getAllActivities, getAllCountries, addActivity } from "../../redux/actions";
// import styles from "./AddActivity.module.css";
// // import Swal from "sweetalert2";

// function valida(input) {
// 	let errors = {};
// 	if (!input.name) {
// 		errors.name = "Name required";
// 	}
// 	return errors;
// }

// function AddActivity() {
// 	const dispatch = useDispatch();
// // 	const history = useHistory();
// 	const allCountries = useSelector((state) => state.allCountries).sort((a, b) => {
// 		if (a.name < b.name) {
// 			return -1;
// 		}
// 		if (a.name > b.name) {
// 			return 1;
// 		}
// 		return 0;
// 	});

// 	const [errors, setErrors] = useState({});

// const [input, setInput] = useState({
// 	name: "",
// 	difficulty: "",
// 	duration: "",
// 	season: "",
// 	countries: [],
// });

// 	useEffect(() => {
// 		dispatch(getAllCountries());
// 	}, [dispatch]);

// 	useEffect(() => {
// 		dispatch(getAllActivities());
// 	}, [dispatch]);

// 	function handleChange(e) {
// 		setInput({
// 			...input,
// 			[e.target.name]: e.target.value,
// 		});
// 		setErrors(
// 			valida({
// 				...input,
// 				[e.target.name]: e.target.value,
// 			})
// 		);
// 	}

// 	function handleSelect(id) {
// 		setInput({
// 			...input,
// 			countries: [...input.countries, id.target.value],
// 		});
// 	}

// 	function handleSeason(e) {
// 		setInput({
// 			...input,
// 			season: e.target.value,
// 		});
// 	}

// 	function handleSelctDifficulty(e) {
// 		setInput({
// 			...input,
// 			difficulty: e.target.value,
// 		});
// 	}

// 	function handleSelectDuration(e) {
// 		setInput({
// 			...input,
// 			duration: e.target.value,
// 		});
// 	}

// 	function handleDelete(e) {
// 		setInput({
// 			...input,
// 			countries: input.countries.filter((c) => c !== e),
// 		});
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		dispatch(addActivity(input));

// 		/*  alert('enviado') */
// 		setInput({
// 			name: "",
// 			difficulty: "",
// 			duration: "",
// 			season: "",
// 			countries: [],
// 		});
// 		// // history.push("/countries");
// 		// Swal.fire(
// 		// 	{
// 		// 		title: "Activity created successfully",
// 		// 		confirmButtonColor: "#34a57f",
// 		// 	} /* ).then(function(){
//         //         window.location.replace('');
//         //     } */
// 		// );
// 	}

// 	const season = ["invierno", "primavera", "otoño", "verano", "todas"];
// 	const difficulty = [1, 2, 3, 4, 5];
// 	const duration = [
// 		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// 		22, 23, 24,
// 	];

// 	return (
// 		<div className={styles.AddActivity}>
// 			<div className={styles.contenedor}>
// 				<div>
// 					<h2>Add Activity</h2>
// 					<div>
// 						<AddActivity onSubmit={handleSubmit}>
// 							<div className={styles.act}>
// 								<label>Activity: </label>
// 								<input
// 									type='text'
// 									value={input.name}
// 									name='name'
// 									onChange={handleChange}
// 									placeholder='Nombre de la actividad...'
// 									required
// 								/>
// 								{errors.name && <p className={styles.error}>{errors.name}</p>}
// 							</div>
// 							<div className={styles.season}>
// 								<label>Season: </label>
// 								<select onChange={handleSeason} required>
// 									<option value='' hidden>
// 										Seleccione temporada
// 									</option>
// 									{season.map((e) => (
// 										<option value={e} name='season' key={e}>
// 											{e}
// 										</option>
// 									))}
// 								</select>
// 							</div>
// 							<div className={styles.diffi}>
// 								<label>Difficulty: </label>
// 								<select onChange={handleSelctDifficulty} required>
// 									<option value='' hidden>
// 										Nivel de dificultad
// 									</option>
// 									{difficulty.map((e) => (
// 										<option value={e} name='difficulty'>
// 											{e}
// 										</option>
// 									))}
// 								</select>
// 							</div>
// 							<div className={styles.duration}>
// 								<label>Duration: </label>
// 								<select onChange={handleSelectDuration} required>
// 									<option value='' hidden>
// 										Tiempo de duracion
// 									</option>
// 									{duration.map((e) => (
// 										<option value={e} name='duration'>
// 											{e}
// 										</option>
// 									))}
// 								</select>
// 							</div>
// 							<div className={styles.country}>
// 								<label>Country: </label>
// 								<select onChange={handleSelect} required>
// 									<option value='' hidden>
// 										Select country
// 									</option>
// 									{allCountries.map((e) => (
// 										<option value={e.id} name='countries' key={e.id}>
// 											{e.name}
// 										</option>
// 									))}
// 								</select>
// 							</div>
// 							<div>
// 								<ul>
// 									<li className={styles.countriesSelected}>
// 										{input.countries.map((i) => (
// 											<div>
// 												{i}
// 												<button onClick={() => handleDelete(i)} type='button'>
// 													X
// 												</button>
// 											</div>
// 										))}
// 									</li>
// 								</ul>
// 							</div>
// 							<button type='submit'>Add Activity</button>
// 						</AddActivity>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default AddActivity;
