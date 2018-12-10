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
            codesnip: myCodeMirror.getValue()
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
<<<<<<< HEAD:public/javascripts/modal.js

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

    console.log(myTextArea);

    let myCodeMirror = CodeMirror(
        function(elt) {
            myTextArea.parentNode.replaceChild(elt, myTextArea);
        },
        {
            value: $("codesnip").text(),
            mode: "javascript",
            theme: "3024-night"
        }
    );
    //end code mirror
=======
    // search button functions
>>>>>>> 56a0d5033ee96ddd12a2ba8ec3d477004614fdc0:public/javascripts/main.js
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
<<<<<<< HEAD:public/javascripts/modal.js
        //$("#selectedKeyword").val();
        location.assign("/api/keywords/" + keywords);
=======
        $("#selectedKeyword").val();
        location.assign(`http://localhost:8080/api/keywords/${keywords}`);
>>>>>>> 56a0d5033ee96ddd12a2ba8ec3d477004614fdc0:public/javascripts/main.js
    });
});
