let express = require("express");
let router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", { title: "MedsPerHour" });
});
/* GET home page. */
router.get("/users", function(req, res) {
    res.render("formsPI", { date: Date.now() });
});

//HEALTH PRACTITIONERS ROUTES
/* medications menu */
router.get("/api/medications", function(req, res) {
    db.Medications.findAll({}).then(function(results) {
        res.render("index", { medications: results });
    });
});
//create new patient or update records of exsting patient
router.post("/users", (req, res) => {
    db.Patients.findOrCreate({ where: { phone: req.body.phoneNumber } }).spread(
        async function(patients, created) {
            const objPatient = await patients.get({
                plain: true
            });
            if (!created) {
                db.Patients.update(
                    {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        dob: req.body.dob,
                        gender: gender.req.body,
                        race: req.body.race,
                        ethnicity: req.body.ethnicity
                    },
                    { where: { id: objPatient.id } }
                ).then(function(results) {
                    res.resder("form", { form: results });
                });
            } else {
                db.Patients.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dob: req.body.dob,
                    gender: gender.req.body,
                    race: req.body.race,
                    phoneNumber: req.body.phoneNumber,
                    ethnicity: req.body.ethnicity
                }).then(function(results) {
                    res.resder("form", { form: results });
                });
            }
        }
    );
});

//form to insert medications and daily intake
router.post("/api/patients/medications", (req, res) => {
    db.Medications.create(
        { medsName: req.body.medsName, dosage: req.body.dosage },
        { where: { id: req.body.id } },
        {
            include: [
                {
                    model: db.Patients,
                    as: "patients"
                }
            ]
        }
    ).then(function(results) {
        res.json(results);
        //res.redirect('/');
    });
});

module.exports = router;
