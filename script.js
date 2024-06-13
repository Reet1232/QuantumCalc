

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);   
    }
    catch(error){
        display.value = "Error"
    }
}

// Listen for keydown events on the document
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Check if the pressed key is a number, operator, or Enter key
    if(/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    }
});