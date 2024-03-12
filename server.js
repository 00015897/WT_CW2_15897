let express = require("express");
let expressValidator = require("express-validator");
let path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static("public/css"));
app.use("/JavaScript", express.static("public/JavaScript"));

// const api_route = require("./routes/api");
// const web_route = require("./routes/web");

// app.use("/api", api_route);
// app.use("/", web_route);

app.get("/order-coffee", (req, res) => {
    res.render("layout.pug");
});

app.get("/orders", (req, res) => {
    res.render("all_orders.pug");
});

global.ordersDB = path.join(__dirname, "./ordersDB.json");

app.listen(3000, () => console.log("Server is working"));
