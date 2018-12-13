require("mocha");
const expect = require("chai").expect;
const db = require("../models");

describe("codes model", () => {
    beforeEach(function(done) {
        db.sequelize
            .sync({ force: true }) // drops table and re-creates it
            .then(async () => {
                await db.Codes.create({ keywords: "CSS" });
                const users = await db.Users.create({ username: "aime" });
                expect(users[0].Users.dataValues.username).to.equal("aime");
                expect(codes[0].Codes.dataValues.keywords).to.equal("CSS");
                done();
            })

            .catch(function(error) {
                done(error);
            });
    });
});
