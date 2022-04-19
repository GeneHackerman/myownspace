const router = require('express').Router();

const apiRoutes = require('./api');

// add prefix of `/api` to all the api routes imported from `/api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('An error has occured!');
});

module.exports = router;