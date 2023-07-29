//varible for user input
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

//variabe to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

//variable for the form
const form = document.querySelector("form");

//variable for the mad lib story
const story = 'My friends and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun1}</b>. Our club has some very special rules. If you want to join, you have to wear a <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart</b>. You are not allowed to <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!'

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (adj1.value == ""){
        alert('s{adj1.name} must be filled out!');
        adj1.focus();
    } else if(noun1.value == "") {
        alert('s{noun1.name} must be filled out!');
        noun1.focus();
    } else if(adj2.value=="") {
        alert('s{adj2.name} must be filled out!');
        adj2.focus();
    } else if(clothing.value=="") {
        alert('s{clothing.name} must be filled out!');
        clothing.focus();
    } else if(bodyPart.value=="") {
        alert('s{bodyPart.name} must be filled out!');
        bodyPart.focus();
    } else if(verb1.value=="") {
        alert('s{verb1.name} must be filled out!');
        verb1.focus();
    } else if(food.value=="") {
        alert('s{food.name} must be filled out!');
        food.focus();
    } else {
        madLibStoryDisplay();
    }

    
});

function madLibStoryDisplay() {
  
        madLibDisplay.innerHTML = story
        .replace('s{adj1}', adj1.value)
        .replace('s{noun1}', noun1.value)
        .replace('s{adj2}', adj2.value)
        .replace('s{clothing}', clothing.value)
        .replace('s{bodyPart}', bodyPart.value)
        .replace('s{verb1}', verb1.value)
        .replace('s{food}', food.value)

}
