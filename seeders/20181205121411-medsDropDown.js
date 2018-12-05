"use strict";

module.exports = {
    up: function(queryInterface) {
        return queryInterface.bulkInsert("Hamburgers", [
            { medsName: "Codeine" },
            { medsName: "Fentanyl" },
            { medsName: "Hydrocodone" },
            { medsName: "Hydromorphone" },
            { medsName: "Meperidine" },
            { medsName: "Methadone" },
            { medsName: "Morphine" },
            { medsName: "OxyContin" },
            { medsName: "Oxycodone" },
            { medsName: "Percocet" },
            { medsName: "Naxolone" }
        ]);
    }
};
