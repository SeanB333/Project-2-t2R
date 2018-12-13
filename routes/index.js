let express = require("express");
let router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", {
        title: "xtract"
    });
});

/*obtain email from user and find or create user
create code information record from user */
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
        .then(async function(objUser) {
            try {
                const createCodeInfo = await db.Codes.create(
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
                );
                if (createCodeInfo) {
                    res.json(createCodeInfo);
                }
            } catch (error) {
                res.sendStatus(500).send(
                    "Please try again later. The server is under maintenance."
                );
            }
        });
});

// browse all codesnips
router.get("/api/code/", async function(req, res) {
    try {
        let results = await db.Codes.findAll({
            include: [{ model: db.Users, as: "users" }],
            order: [["createdAt", "desc"]]
        });

        if (results) {
            let data = { title: "xtract", data: results };
            data.data.forEach(function(obj) {
                let formattedDate = changeDate(obj.dataValues.createdAt);
                obj.dataValues.createdAt = formattedDate;
            });
            res.render("codearea", data);
        } else {
            res.sendStatus(404).send(
                "Please try searching for a different word."
            );
        }
    } catch (error) {
        res.sendStatus(500).send(
            "Please try again later. The server is under maintenance."
        );
    }
});

//look for keywords to be displayed in front end
router.get("/api/keywords/:keywords", async function(req, res) {
    try {
        let codeUserData = await db.Codes.findAll({
            where: { keywords: { $like: `%${req.params.keywords}%` } },
            include: [{ model: db.Users, as: "users" }]
        });
        if (codeUserData) {
            let data = { title: "xtract", data: codeUserData };
            data.data.forEach(function(obj) {
                let formattedDate = changeDate(obj.dataValues.createdAt);
                obj.dataValues.createdAt = formattedDate;
            });
            res.render("codearea", data);
        } else {
            res.sendStatus(404).send(
                "Please try searching for a different word."
            );
        }
    } catch (error) {
        res.sendStatus(500).send(
            "Please try again later. The server is under maintenance."
        );
    }
});

function changeDate(date) {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-US");
}

module.exports = router;
