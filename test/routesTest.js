require("mocha");

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
chai.request("http://localhost:3000").get("/");

chai.request("http://localhost:3000")
    .get("/api/codes/")
    .then(function(res) {
        expect(res).to.have.status(200);
    })
    .catch(function(err) {
        throw err;
    });

chai.request("http://localhost:3000")
    .get("/api/keywords")
    .then(function(res) {
        expect(res).to.have.status(200);
    })
    .catch(function(err) {
        throw err;
    });
