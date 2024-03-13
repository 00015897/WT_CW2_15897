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
    },
    delete_order: async (req, res) => {
        const orders = service.get_orders();
        try {
            const order_number = orders.findIndex((order) => order.id === req.params.id);
            if (order_number !== -1) {
                orders.splice(order_number, 1);
                fs.writeFile("./ordersDB.json", JSON.stringify(orders, null, 4),
                    err => {
                        if (err) return res.status(500);
                        else res.redirect("/all-orders");
                    }
                );
            } else {
                res.status(404)
            }
        } catch (parseError) {
            console.error(parseError);
            res.status(500)
        }
    },
};

module.exports = controller