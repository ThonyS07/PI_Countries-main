const { Activity, Country } = require('../db');


// const createNewActivity = async (req, res) => {
//     try {
//         const { name, difficulty, duration, season, id} = req.body
//         const searchActivity = await Activity.findOne({
//             where: {
//                 name: name,
//             },
//         });
//         if (searchActivity) throw new Error("Esta actividad turistica ya existe"); 

//         const newActivity = await Activity.create({ name, difficulty, duration, season})
//         const countByActivities = await Country.findAll({
//             where: { id }
//         })
//         newActivity.addCountries(countByActivities)

//         return res.status(200).json(newActivity)
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
    
// }

const postActivity = async (req, res) => {
	try {
		const { name, difficulty, duration, season, cId } = req.body;
		console.log("will add activity", req.body);

		const validateActivity = await Activity.findOne({
			where: {
				name: name,
			},
		});

		if (!name || !difficulty || !duration || !season || !cId) {
			res.status(404).json("Please complete all fields.");
		}

		if (validateActivity) {
			res.status(404).json("This activity already exist.");
		} else {
		
			const newActivity = await Activity.create({
				name,
				difficulty,
				duration,
				season,
			});

			for (const countryId of cId) {
				await newActivity.addCountry(countryId);
			}

			res.status(200).send("OK");
		}
	} catch (error) {
		console.log("errro", error);
		res.status(500).send(error);
	}
};

// const createNewActivity = async function (req,res) {
// 	// const searchingActivity = await Activity.findAll({
// 	// 	where: {
// 	// 		name: value.name.toUpperCase(),
// 	// 	},
// 	// });
// 	// if (searchingActivity.length)
// 	// 	throw new Error("Esta actividad turistica ya existe");
// 	// const newActivity = await Activity.create(value);
// 	// const countriesByActivities = await Country.findAll({
// 	// 	where: {
// 	// 		id: value.countries,
// 	// 	},
// 	// });
// 	// newActivity.addCountries(countriesByActivities);
//     // return newActivity;
    
// const { name, difficulty, duration, season, countries} = req.body;

// try {
// 	let activity = await Activity.create({
// 		name,
// 		difficulty,
// 		duration,
// 		season,
// 	});
// 	await activity.setCountries(countries);

// 	let activityWithCountry = await Activity.findOne({
// 		where: { name: name },

// 		include: {
// 			model: Country,
// 			through: {
// 				attributes: [],
// 			},
// 		},
// 	});
// 	res.json(activityWithCountry);
// } catch (error) {
// 	res.status(400).send(error.message);
// }
    

// };
module.exports = postActivity;