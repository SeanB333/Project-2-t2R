$(document).ready(function() {
    $("#upload").on("click", function(event) {
<<<<<<< HEAD
        submitCode(event);
    });

    function submitCode(event) {
        event.preventDefault();
        console.log("submitCode function ran");
        let username = $("#username")
            .val()
            .trim();
        let email = $("#email")
            .val()
            .trim();
        let codeDescription = $("#codeDescription")
            .val()
            .trim();
        let language = $("#language")
            .val()
            .trim();
        let keywords = $("#keywords")
            .val()
            .trim();
        let price = $("#price")
            .val()
            .trim();
        let codesnip = $("#codesnip").val();

        let data = {
            username: username,
            email: email,
            description: codeDescription,
            language: language,
            keywords: keywords,
            price: price,
            codesnip: codesnip
        };
        console.log("data = ", data);
        uploadCode(data);

        function uploadCode(codeData) {
            // $.post("api/code", codeData, function() {

            // });

            $.ajax("/api/code", {
                type: "POST",
                data: codeData
            }).then(() => {
                console.log("sent data");
            });
        }
    }
=======
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
>>>>>>> 3bfd8cd960fcd851e4df5f496b1ba466ef63626b
});
