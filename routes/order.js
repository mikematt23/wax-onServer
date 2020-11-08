const express = require('express');
const router = express.Router();
const controller = require("../controllers/orders")
const cors = require('cors')

router.use(cors({
  origin:'http://localhost:3000'
}))


router.post("/orders/:user_id/:service_level/:date/:time/:now",controller.uploadOrder)


module.exports = router