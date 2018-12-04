$(document).ready(function() {
    $("#login_button").click(function() {
        $("#login_page").removeClass("open");
        $("#dashboard_page").addClass("open");
    });

    $("#search_button").click(function() {
        $("#dashboard_page").addClass("searched");
    });
});