const fs = require("fs");
const orderDB = require(global.ordersDB);

const service = {
    get(req, res) {
        return orderDB;
    },
    create(req, res) {
        const userID = generateUniqueId();
        const body = req.body;
        console.log(body);
        const order = {
            userName: body.userName,
            phoneNumber: body.phoneNumber,
            coffeeType: body.coffeeType,
            quantity: body.quantity,
        };
        orderDB.unshift({
            id: userID,
            order: order,
        });
        writeToFile(orderDB);

        return {
            id: userID,
            order: order,
        };
    },
};
function generateUniqueId() {
    const randomString = Math.random().toString(36).substr(2, 9);
    const timestamp = Date.now().toString(36);
    const uniqueId = randomString + timestamp;
    return uniqueId;
}

let writeToFile = async (orderDB) => {
    await fs.writeFileSync(
        global.ordersDB,
        JSON.stringify(orderDB, null, 4),
        "utf8"
    );
};

module.exports = service;
