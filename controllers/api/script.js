let service = require("../../service/script")
let controller = {
    register: async (req, res) => {
        try {
            const order = await service.create(req);
            res.json(order);
        } catch (error) {
            res.status(500);
        }
    },
    update: async (req, res) => {
        try {
            const order = await service.update(req);
            res.json(order);
        } catch (error) {
            res.status(500)
        }
    }
};
module.exports = controller