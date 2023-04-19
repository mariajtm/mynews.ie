function confirmprompt() {
    if (confirm("Ensure all information entered is correct. You are not allowed to make changes after submission. Do you want to continue?"))
    {var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var category = document.getElementById("category").value;
    var story = document.getElementById("story").value;
    var message = name+" "+email+" "+mobile+" "+category+" "+story;
    window.location.href="mailto:info@mynews.ie?body=" + message;}
    else {
        alert("Operation Cancelled");
    }
        
}




