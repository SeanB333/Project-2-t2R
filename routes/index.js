let express = require("express");
let router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "EXTRACT" });
});
/*create keywords record*/
router.get("/keywords", function(req, res) {
    db.Codes.create({ keywords: req.body.keywords }).then(function(results) {
        res.json(results);
    });
});

module.exports = router;
