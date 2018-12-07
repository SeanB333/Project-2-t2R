$(function() {
    $("#submit").on("click", function(event) {
        console.log("test");
        event.preventDefault();
        let objPatient = {
            firstName: $("#firstName")
                .val()
                .trim(),
            lastName: $("#lastName")
                .val()
                .trim(),
            dob: $("#dob")
                .val()
                .trim(),
            phoneNumber: $("#phoneNumber")
                .val()
                .trim(),
            gender: $("#gender")
                .val()
                .trim(),
            race: $("#race")
                .val()
                .trim(),
            ethnicity: $("#ethnicity")
                .val()
                .trim()
        };

        $.ajax("/users", {
            type: "POST",
            data: objPatient
        }).then(() => {
            console.log("Created a new patient");
            location.reload();
        });

        $("#firstName").val("");
        $("#lastName").val("");
        $("#dob").val("");
        $("#phoneNumber").val("");
        $("#gender").val("");
        $("#race").val("");
        $("#ethnicity").val("");

        window.location = "http://localhost:8080/users/medications";
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let medObj = {
            medsName: $("#medsName")
                .val()
                .trim(),
            dosage: $("#dosage")
                .val()
                .trim(),
            medsName2: $("#medsName2")
                .val()
                .trim(),
            dosage2: $("#dosage2")
                .val()
                .trim(),
            medsName3: $("#medsName3")
                .val()
                .trim(),
            dosage3: $("#dosage3")
                .val()
                .trim()
        };

        $.ajax("/users/medications", {
            type: "POST",
            data: medObj
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });

        $("#medsName").val("");
        $("#dosage").val("");
        $("#medsName2").val("");
        $("#dosage2").val("");
        $("#medsName3").val("");
        $("#dosage3").val("");
    });
});
