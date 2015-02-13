$(document).ready(function () {
    var boxes = 0;

    $("#addComment").click(function () {
        boxes++;
        var newTextBoxDiv = $(document.createElement('div'))
            .attr({
                "id": 'newdiv' + boxes,
                "class": 'newstuff'
            });
        var newid = "textbox" + boxes;
        newTextBoxDiv.after().html('<label>Comment' + boxes + ' : </label>' +
           '<input type="text" name="textbox' + boxes + '" id=' + newid + ' value="">');
        $("#buttons").prepend(newTextBoxDiv);
    });

    $("#saveComment").click(function () {
        var allNewTextBoxes = $("input[id *= 'textbox']");
        var comments = [];
        allNewTextBoxes.each(function (index, item) {
            if (item.value.length != 0) {
                comments.push(item.value);
            }
        });
        var aStr = JSON.stringify(comments);
        localStorage.setItem("exp2", aStr);
    });

    $("#reloadComment").click(function () {
        var storedValues = localStorage.getItem("exp2");
        if (storedValues == null) return;
        storedValues = JSON.parse(storedValues);
        console.log(storedValues);
        for (var i in storedValues) {
            var comm = storedValues[i];
            var comment = $("<p>" + comm + "</p>" + "<br>");
            $("#commentList").append(comment);
        }
    });
});