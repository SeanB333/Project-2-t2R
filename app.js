const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
<<<<<<< HEAD
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
=======
app.use(ignoreFavicon);
>>>>>>> 3bfd8cd960fcd851e4df5f496b1ba466ef63626b
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

let hbs = require("hbs");
hbs.registerPartials(__dirname + "views");
// error handler

app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "test" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const db = require("./models");
const PORT = process.env.PORT || 7878;
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
