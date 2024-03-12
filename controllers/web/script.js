let fs = require("fs");

let controller = {
    create: async (req, res) => {
        try {
            res.render("layout.pug");
        } catch (error) {
            res.status(500)
        }
    },
};

module.exports = controller