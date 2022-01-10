
//Fonction Add
function add()
{

        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").value = parseInt(num1) + parseInt(num2);
        document.getElementById("result").style.background = '#E0EEE0';

}

//Fonction Substract
function substract()
{

        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").value = num1 - num2;
        document.getElementById("result").style.background = '#E0EEE0';

}

//Fonction Multiply
function multiply()
{

        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").value = num1 * num2;
        document.getElementById("result").style.background = '#E0EEE0';


}

//Fonction Divide
function divide()
{

        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").value = num1 / num2;
        document.getElementById("result").style.background = '#E0EEE0';

}