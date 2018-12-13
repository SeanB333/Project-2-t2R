const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(ignoreFavicon);
app.use("/", indexRouter);

//express-handlebars path settings
const exphbs = require("express-handlebars");
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: "views/layouts",
        partialsDir: "views/partials"
    })
);
app.set("view engine", ".hbs");

//sequelize connection
const db = require("./models");
const PORT = process.env.PORT || 8080;
db.sequelize.sync({}).then(function() {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
});
// this function removes the Get favicon
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === "/favicon.ico") {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
}

module.exports = app;
