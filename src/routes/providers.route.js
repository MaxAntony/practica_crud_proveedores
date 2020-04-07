const router = require('express').Router();
const { getProviders } = require('../controllers/providers.controllers');

router.get('/', getProviders);

module.exports = router;
