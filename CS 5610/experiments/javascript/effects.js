
$(document).ready(function () {
    $("#show-hide-btn").click(function () {
        $("#show-hide").toggle();
    });

    $("#fadeIn-fadeout-btn").click(function () {
        $("#div1").fadeToggle(2000);
    });

    $("#animate-test img").hover(function () {
        $(this).stop().animate({ width: "500px" , height: "500px"});
        
    }, function () {
        $(this).stop().animate({ width: "200px" , height: "300px"});
    });

   
});