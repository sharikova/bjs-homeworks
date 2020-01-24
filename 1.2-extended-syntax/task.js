"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

    function getResult(a,b,c){
        let discriminant = b**2 - 4 * a * c; 
        let result = [];
        if (discriminant < 0) {
            result = [ ];
          } else if (discriminant == 0) {
            result = [-b / ( 2 * a )];
          } else {
            result[0] = -b / ( 2 * a ) + Math.sqrt( discriminant ) / ( 2 * a );
            result[1] = -b / ( 2 * a ) - Math.sqrt( discriminant ) / ( 2 * a );
          }
          return result;
    }
function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let marksSum = 0;
    if (marks.length > 5) {
        marks.slice(0, 5)
        console.log("Вы ввели слишком много оценок, оценки после 5ой не будут учитываться");
    }
    for (let i = 0; i <= marks.length - 1; i++) {
        marksSum = marksSum + marks[i];
    }
        return marksSum/ marks.length;
    }

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let resultate;
    if (age >= 18) {
        resultate = "Не желаете ли олд-фэшн, " + name + "?";
    } else {
        resultate = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
    
    return resultate;
}