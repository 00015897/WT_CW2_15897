let express = require("express");
let controller = require("../../controllers/web/script.js")

let router = express.Router();
router.get("/order-coffee", controller.create);
router.get("/all-orders", controller.get_orders)
module.exports = router;