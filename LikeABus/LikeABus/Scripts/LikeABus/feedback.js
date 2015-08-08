$(document).ready(submitForm);

function submitForm() {
    console.log("opened script file");
    $("#submit").click(function() {
        if ($('input[name=gender]:checked').length > 0) {
            debugger;
            console.log("is selected");
        }
    });
    
}
