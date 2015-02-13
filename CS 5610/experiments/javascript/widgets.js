$(function () {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags,
        autoFocus: true,
        _renderItem: function (ul, item) {
            return $("<li>")
              .attr("data-value", item.value)
              .append(item.label)
              .appendTo(ul);
        },
        focus: function (event, ui) {
            $(".ui-helper-hidden-accessible").hide();
            event.preventDefault();
        }
    });
});

$(function () {
    $("#accordion-1").accordion();
});

$(function () {
    $("#menu").menu();
});

$(function () {
    $(document).tooltip();
});