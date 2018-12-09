$(document).ready(function() {
    $("#upload").on("click", function(event) {
        submitCode(event);
    });

    function submitCode(event) {
        event.preventDefault();
        console.log("submitCode function ran");
        let username = $("#username").val().trim(); 
        let email = $("#email").val().trim();
        let codeDescription = $("#codeDescription").val().trim();
        let language = $("#language").val().trim();
        let keywords = $("#keywords").val().trim();
        let price = $("#price").val().trim();
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
});
