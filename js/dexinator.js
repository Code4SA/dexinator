function dexinate(event) {
    var input = $(event.target).val();

    input = input.replace("<br>", "<br />");
    input = input.replace("></script>", "> </script>");


    $("textarea[name='output']").val(input);

    //$("#preview").empty();
    //$("#preview").append($(input));

}

var inputEl = $("textarea[name='input']");

inputEl.change(dexinate);
inputEl.keyup(dexinate);
