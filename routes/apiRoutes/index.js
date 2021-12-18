const express = require('express');
const router = express.Router();

router.use(require('../../routes/apiRoutes/candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router; 