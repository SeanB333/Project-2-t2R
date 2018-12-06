$(function() {
    $("#submit").on("click", function(event) {
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
    });
});
