
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const loadDb = require("./src/controllers/loadDb");
const PORT = process.env.PORT || 3001;
// Syncing all the models at once
conn.sync({
	force: false}).then(() => {
	server.listen(PORT, () => {
		loadDb();
		console.log("listening at PORT:" + PORT); // eslint-disable-line no-console
	});
});

