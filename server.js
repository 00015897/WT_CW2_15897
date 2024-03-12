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
global.ordersDB = path.join(__dirname, "./ordersDB.json");

const web_route = require("./routes/web/script");
app.use("/", web_route);

const api_route = require("./routes/api/script");
app.use("/api", api_route);

app.get("/orders", (req, res) => {
    res.render("all_orders.pug");
});

app.listen(3000, () => console.log("Server is working"));
