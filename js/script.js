$(document).ready(function() {

    // Section 1: Button Styling
    $(".border-btn").eq(0).click(function () {
        $(this).toggleClass("glow");
    });

    $(".border-btn").eq(1).click(function () {
        $(this).toggleClass("pop");
    });

    $(".border-btn").eq(2).click(function () {
        $(this).toggleClass("focus");
    });

    $("#loadBtn").click(function () {
    var text = $("#textInput").val();

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    $("#contentArea").append("<p class='dynamic-text'>" + text + "</p>");

    $("#textInput").val("");
    });
    $("#clearTextBtn").click(function () {
      $("#contentArea").empty();
    });

    // Section 2: toggle text
     $(".toggle-btn").click(function(){
    $(this).siblings("p").slideToggle("slow"); 
    });

    // Section 3: color input and storage
    $("#submitColor").click(function(){
        var color = $("#favColor").val();

        if(color === ""){
            $("#output").html("<p>Please enter a color.</p>");
            return;
        }

        $("#output").html("<p>Your favourite colour is <b>" + color + "</b>.</p>");

        $("body").css("background-color", color);

        // SAVE color
        localStorage.setItem("bgColor", color);
    });

    // load saved color on refresh
    var savedColor = localStorage.getItem("bgColor");
    if(savedColor){
        $("body").css("background-color", savedColor);
    }

    // reset button
    $("#output").after('<button id="resetColor">Reset Color</button>');

    $(document).on("click", "#resetColor", function(){
        $("body").css("background-color", "#f4f4f4");
        localStorage.removeItem("bgColor");
        $("#output").html("<p>Color reset.</p>");
    });

});