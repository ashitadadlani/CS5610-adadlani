$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    $("#input_focus_name").focus(function () {
        $(this).css("background-color", "#cccccc");
        $("#name").css("display", "inline").fadeOut(2000);
    });
    $("#input_focus_email").focus(function () {
        $(this).css("background-color", "#ffffff");

        $("#email").css("display", "inline").fadeOut(2000);
    });

    $("#mouseup").mouseup(function () {
        $(this).after('<img src="../../images/MyImages/sampleimage.png"/>');
    });
    
   
});;