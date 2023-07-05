const { Activity, Country } = require("../db");

const deleteActivity = async (req, res) => {
    try {
        const { name } = req.params;
        const mayusName = name.toUpperCase();
        const erase = await Activity.destroy({ where: { name:mayusName} })
        res.status(200).send("Actividad borrada satisfactoriamente");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = deleteActivity;
