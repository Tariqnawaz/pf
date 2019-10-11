function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["message"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (subject == "") {
        alert("Subject must be filled out");
        return false;
    } else if (message == "") {
        alert("Message must be filled out");
        return false;
    }
    return true;
}

