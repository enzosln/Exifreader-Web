module.exports = require('express-rate-limit')({
  windowMs: 60^2 * 1000, // une minute
  limit: 10,
  message : {error : "TOO_MANY_REQUESTS",message:'You can only send 10 files/hour'},
  trustProxy: true,
  legacyHeaders : false
})