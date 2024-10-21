// Function to append value to the input field
function inputValue(value) {
    document.getElementById("result").value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to delete the last character
function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let expression = document.getElementById("result").value;
    if (expression) {
        try {
            document.getElementById("result").value = eval(expression);
        } catch {
            document.getElementById("result").value = "Error";
        }
    }
}