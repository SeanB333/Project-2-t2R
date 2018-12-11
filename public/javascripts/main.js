$(document).ready(function () {
    // post modal functions
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
            $("#error").html("You are required to enter your code info");
            console.log("err");
        } else {
            $.ajax("/api/code", {
                type: "POST",
                data: data
            }).then(() => {
                console.log("sent data");
                $("#successMsg").html("<div class='loader'></div>");
                setTimeout(function () {
                    $("#upload").addClass("success");
                    $("#upload").html("posted");
                    $("#successMsg").html("success, your code has been added");
                    $("#successMsg").css("color", "green");
                }, 4000);

                setTimeout(function () {
                    $("#upload").removeClass("success");
                    $("#upload").html("post");
                    $("#successMsg").html("");
                    location.reload();
                }, 5000);
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
    $("#language").change(function () {
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
    let myCodeMirror;
    if (document.getElementById("codesnip")) {

        let myTextArea = document.getElementById("codesnip");

        let code = myTextArea.innerText;

        console.log(myTextArea);
        console.log(code);

        myCodeMirror = CodeMirror(
            function (elt) {
                myTextArea.parentNode.replaceChild(elt, myTextArea);
            },
            {
                value: code,
                mode: "javascript",
                theme: "3024-night"
            }
        );
    }
    //console.log("here");
    let codelist = [];
    $(".search-code").each(function (index) {
        //console.log("is this shit fucking working?????????????");
        console.log($(this).text());
        let textArea = this;
        let text = textArea.innerText;
        codelist.push(CodeMirror(
            function(elt) {
                textArea.parentNode.replaceChild(elt, textArea);
            },
            {
                value: text,
                mode: "javascript",
                theme: "3024-night"
            }
        ))        
    });
    //end code mirror

    $("#searchSubmit").on("click", function (event) {
        event.preventDefault();
        let keywords = $("#selectedKeyword")
            .val()
            .trim();
        if (keywords === "") {
            $("#search-err").html("please enter search keywords");
        } else {
            $("#search-err").html("");
            $("#rotate-btn").html("<div class='loader ml-5'></div>");
            $.ajax({
                url: `/api/keywords/${keywords}`,
                method: "GET"
            }).then(function (result) {
                console.log(result);
            });
            $("#selectedKeyword").val();
            setTimeout(function () {
                location.assign(
                    `http://localhost:8080/api/keywords/${keywords}`
                );
                $("#rotate-btn").html("");
            }, 3000);
        }
    });
    // browse button function
    $("#browseBtn").click(function (e) {
        e.preventDefault();
        $("#rotate-btn").html("<div class='loader ml-5'></div>");
        setTimeout(function () {
            window.location = "/api/code/";
            $("#rotate-btn").html("");
        }, 3000);
    });
});
