let express = require("express");
let controller = require("../../controllers/web/script.js");

let router = express.Router();
router.get("/order-coffee", controller.create);
router.get("/all-orders", controller.get_orders);
router.get("/order-update/:id", controller.update_order);
router.get("/order-delete/:id", controller.delete_order);
module.exports = router;