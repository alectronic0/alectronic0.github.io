var express = require('express');
var router = express.Router();
const { healthcheck, localHealth } = require('../health/healthcheck.js')


router.get('/health', healthcheck.configure({
checks: {
  localHealth: healthcheck.raw(() => {return localHealth() ? healthcheck.up() : healthcheck.down()}),
},
buildInfo: {}
}));

module.exports = router;
