let fs = require("fs");
let service = require("../../service/script")
let controller = {
    create: async (req, res) => {
        try {
            res.render("layout.pug");
        } catch (error) {
            res.status(500)
        }
    },
    get_orders: async (req, res) => {
        try {
            const orders = service.get_orders();
            res.render("all_orders.pug", { orders });
        } catch (error) {
            console.error("Error getting orders:", error);
            res.status(500)
        }
    },
    update_order: async (req, res) => {
        try {
            const orders = service.get_orders();
            const order = orders.find(
                (order) => order.id === (req.params.id)
            );
            if (!order) {
                return res.status(404).send("Order not found");
            }
            res.render("order_update.pug", { order });
        } catch (error) {
            console.error("Error getting orders:", error);
            res.status(500)
        }
    }
};

module.exports = controller