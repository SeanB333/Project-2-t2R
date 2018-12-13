require("mocha");
const expect = require("chai").expect;
const db = require("../models");

describe("codes model", () => {
    beforeEach(function(done) {
        db.sequelize
            .sync({ force: true }) // drops table and re-creates it
            .then(async () => {
                await db.Codes.create({ language: "CSS" });
                const users = await db.Users.create({ username: "aime" });
                expect(users[0].Users.dataValues.username).to.equal("aime");
                done();
            })

            .catch(function(error) {
                done(error);
            });
    });
});
