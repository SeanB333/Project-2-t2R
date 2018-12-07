let express = require("express");
let router = express.Router();
//let db  = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "MedsPerHour" });
});

module.exports = router;
