$(document).ready(function() {
    // post modal functions
    $("#upload").on("click", function(event) {
        event.preventDefault();
        console.log("submitCode function ran");
        const data = {
            username: $("#username")
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
    // search button functions
    $("#searchSubmit").on("click", function(event) {
        event.preventDefault();
        let keywords = $("#selectedKeyword")
            .val()
            .trim();
        $.ajax({
            url: `/api/keywords/${keywords}`,
            method: "GET"
        }).then(function(result) {
            console.log(result);
        });
        $("#selectedKeyword").val();
        location.assign(`http://localhost:8080/api/keywords/${keywords}`);
    });
});
