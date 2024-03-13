let express = require('express');
let { validationResult } = require('express-validator');
let controller = require("../../controllers/api/script")
let router = express.Router();

router.post('/order-coffee', (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400)
    }
    controller.register(req, res);
});
router.post('/order-update/:id', (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400)
    }
    controller.update(req, res);
});

module.exports = router;