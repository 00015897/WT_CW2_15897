const fs = require("fs");
const path = require("path")
const ordersFilePath = path.resolve(__dirname, "../ordersDB.json");
const ordersJSON = fs.readFileSync(ordersFilePath, "utf8");

const ordersDB = JSON.parse(ordersJSON);
const service = {
    get_orders(req, res) {
        return ordersDB;
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
        ordersDB.unshift({
            id: userID,
            order: order,
        });
        writeToFile(ordersDB);

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

let writeToFile = async (ordersDB) => {
    await fs.writeFileSync(
        global.ordersDB,
        JSON.stringify(ordersDB, null, 4),
        "utf8"
    );
};

module.exports = service;
