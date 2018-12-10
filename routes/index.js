let express = require("express");
let router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "Extract" });
});

/*obtain info from user and create a new record in table*/
router.post("/api/code", function(req, res) {
    db.Users.findOrCreate({ where: { username: req.body.username } }).spread(
        (user, created) => {
            console.log(
                user.get({
                    plain: true
                })
            );
            console.log(created);
        }
    );

    // router.post("/api/users/", (req, res) => {
    //     db.Users.findOrCreate({
    //         where: { username: req.body.username }
    //     }).spread(async function(users, created) {
    //         const objUser = await patients.get({
    //             plain: true
    //         });
    //     });

    db.Codes.create(
        {
            keywords: req.body.keywords,
            description: req.body.codeDescription,
            language: req.body.language,
            price: req.body.price,
            codesnip: req.body.codesnip
        },
        { where: { username: req.body.username } },
        { include: [{ model: db.Users, as: "users" }] }
    ).then(function(results) {
        res.json(results);
    });
});

//look for keywords to be displayed in front end
router.get("/api/keywords", function(req, res) {
    db.Codes.findAll({}, { where: { keywords: req.body.keywords } }).then(
        function(keywords) {
            let objKeywords = keywords[0].dataValues.keywords;
            res.json(objKeywords);
            //res.render("display", { search: objKeywords });
        }
    );
});

module.exports = router;
