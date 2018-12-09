$(document).ready(function() {
    $("#upload").on("click", submitCode);

    function submitCode(event) {
        event.preventDefault();
        uploadCode({
            username: username,
            email: email,
            description: codeDescription,
            language: languages,
            keywords: keywords,
            price: price,
            codesnip: codesnip
        });

        function uploadCode(codeData) {
            $.post("api/code", codeData);
        }
    }
});
