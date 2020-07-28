
function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;

    // storage player name
    sessionStorage.setItem("name", name);

    // set location 
    location.href = "quiz.html";
    console.log(name);
}