const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare
    .goto("http://localhost:8080/")
    .type("#selectedKeyword", "css")
    .click("#searchSubmit")
    .wait("#r1-0 a.result__a")
    .evaluate(() => document.querySelector("#r1-0 a.result__a").href)
    .end()
    .then(console.log)
    .catch(function(error) {
        console.error("Search failed:", error);
    });
