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
            languages: $("#language")
                .val()
                .trim(),
            keywords: $("#keywords")
                .val()
                .trim(),
            price: $("#price")
                .val()
                .trim(),
            codesnip: myCodeMirror.getValue()
        };
        console.log("data = ", data.username);
        // empty form validation
        if (
            data.username === "" ||
            data.codeDescription === "" ||
            data.keywords === "" ||
            data.price === ""
        ) {
            $("#error").html("you must enter info");
            console.log("err");
        } else {
            $.ajax("/api/code", {
                type: "POST",
                data: data
            }).then(() => {
                console.log("sent data");
            });

            $("#username").val("");
            $("#email").val("");
            $("#codeDescription").val("");
            $("#keywords").val("");
            $("#price").val("");
            $("#codesnip").val("");
        }
    });

    //when user changes #laguage dropdown value, update codemirror
    $("#language").change(function() {
        console.log("language changed: ", $("#language").val());
        let lang = $("#language").val();
        if (lang === "html") {
            lang = "htmlmixed";
        }
        if (lang === "json") {
            lang = "javascript";
        }

        myCodeMirror.setOption("mode", lang);
    });

    //code mirror initialize
    let myTextArea = document.getElementById("codesnip");
    let code = myTextArea.innerText;

    console.log(myTextArea);
    console.log(code);

    let myCodeMirror = CodeMirror(
        function(elt) {
            myTextArea.parentNode.replaceChild(elt, myTextArea);
        },
        {
            value: code,
            mode: "javascript",
            theme: "3024-night"
        }
    );
    //end code mirror

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
