const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRouter = require('./countryRoute.js');
const activityRouter = require('./activityRouter.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Configurar los routers
// router.use('/countries', countryRouter);
router.use('/activities', activityRouter);
router.use('/countries', countryRouter);


module.exports = router;
