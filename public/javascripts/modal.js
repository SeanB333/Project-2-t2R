$(document).ready(function() {
    $("#upload").on("click", function(event) {
        event.preventDefault();
        console.log("submitCode function ran");
        const data = {
            username: $("#username")
                .val()
                .trim(),
            email: $("#email")
                .val()
                .trim(),
            codeDescription: $("#codeDescription")
                .val()
                .trim(),
            language: $("#language")
                .val()
                .trim(),
            keywords: $("#keywords")
                .val()
                .trim(),
            price: $("#price")
                .val()
                .trim(),
            codesnip: $("#codesnip")
                .val()
                .trim()
        };

        console.log("data = ", data);

        $.ajax("/api/code", {
            type: "POST",
            data: data
        }).then(() => {
            console.log("sent data");
        });

        $("#username").val("");
        $("#email").val("");
        $("#codeDescription").val("");
        $("#language").val("");
        $("#keywords").val("");
        $("#price").val("");
        $("#codesnip").val("");
    });
});
