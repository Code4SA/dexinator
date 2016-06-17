function dexinate(event) {
    var input = $(event.target).val();

    ga('send', 'event', 'dexinate-input', input);

    input = input.replace("<br>", "<br />");
    input = input.replace("></script>", "> </script>");
    input = input.replace("></iframe>", "> </iframe>");

    $("textarea[name='output']").val(input);

    ga('send', 'event', 'dexinate-result', input);
}

var inputEl = $("textarea[name='input']");

inputEl.change(dexinate);
inputEl.keyup(dexinate);
