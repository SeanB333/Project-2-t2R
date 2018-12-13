require("mocha");
const chai = require("chai");
const expect = chai.expect;
const request = chai.request;
console.log(Object.keys(chai));
console.log(Object.keys(request));

it("should return 200", function(done) {
    let options = {
        url: "http://localhost:8080",
        headers: {
            "Content-Type": "text/plain"
        }
    };
    request.get(options, function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal("correct header");
        done();
    });
});
