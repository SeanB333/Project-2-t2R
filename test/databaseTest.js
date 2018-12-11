require("mocha");
const db = require("../models");

describe("codes model", () => {
    beforeEach(function(done) {
        db.sequelize
            .sync({ force: true }) // drops table and re-creates it
            .then(async () => {
                const codes = await db.Codes.create({ language: "CSS" });
                const users = await db.Users.create({ username: "aime" });
                await codes.addUsers(users);
                done();
            })

            .catch(function(error) {
                done(error);
            });
    });

    it("should have all associations", async () => {
        const codes = await db.Users.findOne({ id: 1 });
        const users = await codes.getUsers();
        expect(users.length).to.equal(1);
        expect(users[0].get().username).to.equal("aime");
    });
});
