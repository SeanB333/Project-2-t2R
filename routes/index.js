let express = require("express");
let router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "Extract" });
});

router.get("/keywords", function(req, res) {
    res.render("codearea", { title: "Search Deivery" });
});
/*obtain info from user and create a new record in table*/
router.post("/api/code", function(req, res) {
    db.Users.findOrCreate({ where: { username: req.body.username } })
        .spread(async (user, created) => {
            console.log(
                user.get({
                    plain: true
                })
            );

            let objUser = await user.get({
                plain: true
            });

            console.log(created);
            return objUser;
        })
        .then(function(objUser) {
            console.log(req.body);
            db.Codes.create(
                {
                    keywords: req.body.keywords,
                    codeDescription: req.body.codeDescription,
                    languages: req.body.languages,
                    price: req.body.price,
                    codesnip: req.body.codesnip,
                    usersId: objUser.id
                },
                {
                    where: { users: [{ username: req.body.username }] },
                    include: [{ model: db.Users, as: "users" }]
                }
            ).then(function(results) {
                res.json(results);
            });
        });
});

//look for keywords to be displayed in front end
router.get("/api/keywords/:keywords", async function(req, res) {
    const codeUserData = await db.Codes.findAll({
        where: { keywords: req.params.keywords },
        include: [{ model: db.Users, as: "users" }]
    });
    res.render("codearea", { data: codeUserData });
});

// browse all codesnips
router.get("/api/code/", function(req, res) {
    db.Codes.findAll({}).then(function(results) {
        let data = { data: results };
        console.log(results);
        res.render("codearea", data);
    });
});
module.exports = router;
