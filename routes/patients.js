let express = require("express");
let router = express.Router();
const db = require("../models");

/* Create new patient or update records of exsting patient*/

router.post("/api/patients", (req, res) => {
    console.log("hello");
    // db.Patients.findOrCreate({ where: { phone: req.body.phoneNumber } }).spread(
    //     async function(patients, created) {
    //         const objPatient = await patients.get({
    //             plain: true
    //         });
    //         if (!created) {
    //             db.Patients.update(
    //                 {
    //                     firstName: req.body.firstName,
    //                     lastName: req.body.lastName,
    //                     dob: req.body.dob,
    //                     gender: gender.req.body,
    //                     race: req.body.race,
    //                     ethnicity: req.body.ethnicity
    //                 },
    //                 { where: { id: objPatient.id } }
    //             ).then(function(results) {
    //                 res.resder("formsPI", { form: results });
    //             });
    //         } else {
    db.Patients.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        gender: gender.req.body,
        race: req.body.race,
        phoneNumber: req.body.phoneNumber,
        ethnicity: req.body.ethnicity
    }).then(function(results) {
        res.resder("formsPI", { form: results });
    });
    //  }
});
// });
module.exports = router;
