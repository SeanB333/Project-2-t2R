let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "We now Have a working front-end template" });
});

module.exports = router;
