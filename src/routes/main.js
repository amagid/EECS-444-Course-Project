$(document).ready(function() {
    $("#login_button").click(function() {
        $("#login_page").removeClass("open");
        $("#dashboard_page").addClass("open");
    });

    $("#search_button").click(function() {
        $("#dashboard_page").addClass("searched");
        $.get("/api/aliases", { city: $("#city").val() }, function(data) {
            $("#results").empty();
            for (let alias of data) {
                $("#results").append(generateResult(alias));
            }
        });
    });
});

function generateResult(alias) {
    return `<div class=\"result\">${alias}</div>`;
}