function dexinate(event) {
    var input = $(event.target).val();

    input = input.replace("<br>", "<br />");
    input = input.replace("></script>", "> </script>");


    $("textarea[name='output']").val(input);

    //$("#preview").empty();
    //$("#preview").append($(input));

}

function recurse(node) {
    var child;
    for (var i = 0; i < node.childElementCount; i++) {
        child = node.childNodes[i];

        if (child.nodeName == 'SCRIPT' && child.childElementCount == 0) {
            console.log("found an empty script")
        }
        recurse(child);
    }
}

var inputEl = $("textarea[name='input']");

inputEl.change(dexinate);
inputEl.keyup(dexinate);
