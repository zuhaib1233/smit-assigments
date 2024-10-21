
let val = "";
let operand1 = "";
let operand2 = "";
let operator;

function calculate(operand1, operand2, operator) {
    if(operator == '+') {
        return operand1 + operand2;
    }
    else if(operator == '-') {
        return operand1 + operand2;
    }
    else if(operator == '*') {
        return operand1 + operand2;
    }
    else if(operator == '/') {
        return operand1 + operand2;
    }
    else {
        return operand1;
    }
}

function inputValue(arg) {
    if((arg >= '0' && arg <= '9') || arg == '.') {
        val += arg;
    }
    else if(arg == '+' || arg == '-' || arg == '*' || arg == '/'){
        operand1 = val;
        operator = arg;
    }
    else if(arg == '=') {
        operand2 = val;
        let res = calculate(operand1, operand2, operator);
    }
    else if(arg == 'C') {
        val = "";
        operand1 = "";
        operand2 = "";
    }
    else if(arg == 'D') {
        val = val.slice(0, -1);
    }
}