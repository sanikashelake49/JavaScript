function calculate(operator){

    let n1 = Number(document.getElementById("num1").value);

    let n2 = Number(document.getElementById("num2").value);

    let result;

    switch(operator){

        case "+": result = n1 + n2;
                  break;

        case "-": result = n1 - n2;
                  break;

        case "*": result = n1 * n2;
                  break;

        case "/": result = n1 / n2;
                  break;

        default:
            result = "Invalid";
    }

    document.getElementById("result").value = result;

}