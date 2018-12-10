$(document).ready(function () {
    $("#upload").on("click", function (event) {
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

    //when user changes #laguage dropdown value, update codemirror
    $("#language").change(function () {
        console.log("language changed: ", $("#language").val());
        let lang = $("#language").val();
        if(lang === "html") {
            lang = "htmlmixed";
        }
        if(lang === "json") {
            lang = "javascript"
        }

        myCodeMirror.setOption("mode", lang);
    })

    //code mirror initialize
    let myTextArea = document.getElementById("codesnip");

    console.log(myTextArea);

    let myCodeMirror = CodeMirror(function (elt) {
        myTextArea.parentNode.replaceChild(elt, myTextArea);
    }, {
            value: $("codesnip").text(),
            mode: "javascript",
            theme: "3024-night"
        });
    //end code mirror
});
