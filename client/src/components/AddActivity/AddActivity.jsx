import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getAllCountries } from "../../redux/actions";
import styles from "./AddActivity.module.css";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const AddActivity = () => {
	const validation = (input) => {
		let errors = {};
		if (input.name.length === 0) errors.name = "Required field";
		if (input.difficulty.length === 0) errors.difficulty = "Required field";
		if (input.duration.length === 0) errors.duration = "Required field";
		if (input.season.length === 0) errors.season = [];
		if (input.difficulty < 1 || input.difficulty > 5)
			errors.difficulty = "The difficulty must be between 1 and 5";
		if (input.duration < 1 || input.duration > 24)
			errors.duration = "The duration must be between 1hr and 24hr";

		

		return errors;
	};
	const navigate=useNavigate()
	const dispatch = useDispatch();
	const allCountries = useSelector((state) => state.allCountries);

	const [Activity, setActivity] = useState({
		name: "",
		difficulty: 0,
		duration: 0,
		season: "",
		countries: [],
	});
	const [errors, setErrors] = useState({});
	console.log(Activity);

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

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

	const handleSelect = (id) => {
		setActivity({
			...Activity,
			countries: [...Activity.countries, id.target.value],
		});
	};
	const handleDelete = (e) => {
		setActivity({
			...Activity,
			countries: Activity.countries.filter((country) => country !== e),
		});
	};

	const handleSubmit = (e) => {
		if (
			!Activity.name ||
			!Activity.duration ||
			!Activity.difficulty ||
			!Activity.season ||
			!Activity.countries.length
		) {
			return alert("Complete all the fields");
		} 
		dispatch(addActivity(Activity));
		navigate('/countries/')

		
	};

	return (
		<div className={styles.ActivityContainer}>
			<div className={styles.content}>
				<div className={styles.AddActivity}>
					<h2 className={styles.tittle}>Add new tourist activity</h2>
					<form onSubmit={handleSubmit}>
						<div>
							<label className={styles.labels}>Name: </label>
							<input
								type='text'
								name='name'
								value={Activity.name}
								onChange={handleInputChange}
								className={styles.input}
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
								className={styles.selector2}
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
								className={styles.selector2}
								placeholder='Insert number of hours'></input>
							<br />
							{errors.duration && (
								<p className={styles.errors}>{errors.duration}</p>
							)}
						</div>
						<div>
							<label className={styles.labels}>Season: </label>
							<select
								onChange={handleInputChange2}
								name='seasons'
								className={styles.selector2}>
								<option value=''>Select season</option>
								<option value='All seasons'>All seasons</option>
								<option value='Summer'>Summer</option>
								<option value='Spring'>Spring</option>
								<option value='Autumn'>Autumn</option>
								<option value='Winter'>Winter</option>
							</select>
							<br />
							{errors.season && (
								<p className={styles.errors}>{errors.season}</p>
							)}
						</div>
						<div>
							<div className={styles.country}></div>
							<label className={styles.labels}>Countries</label>
							<select
								className={styles.selector2}
								onChange={handleSelect}
								required>
								<option value='' hidden>
									Select country
								</option>
								{allCountries.map((country) => (
									<option
										label={country.name}
										value={country.id}
										key={country.id}>
										{country.id}
									</option>
								))}
							</select>
						</div>
						<div>
							<ul>
								<li className={styles.countryWrapper}>
									{Activity.countries.map((id) => (
										<div key={id} className={styles.countriesSelected}>
											{id}
											<button onClick={() => handleDelete(id)} type='button'>
												X
											</button>
										</div>
									))}
								</li>
							</ul>
						</div>

						<br />
						{errors.countries && (
							<p className={styles.errors}>{errors.countries}</p>
						)}
						<div className={styles.submit}>
							<Buttons buttonName={"Add"} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddActivity;
