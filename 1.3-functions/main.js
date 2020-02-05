"use strict"
// Первая задача
let a, b, c;
let decision;
let result;

function getSolutions(a, b , c){
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    decision = {
      D: D
    }
  } else if (D === 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    decision = {
      root: [x1],
      D: D
    }
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    decision = {
      root: [x1, x2],
      D: D
    }
  }
  return decision;
}

function showSolutionsMessage(a, b, c) {
  result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${decision.D}`);
  if (decision.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (decision.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${decision.root[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${decision.root[0]}, X₂ = ${decision.root[1]}`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// вторая задача
function getAverageScore(data) {

	function getAverageMark(marks) {
	    let sumMarks = 0;
	    for (let i = 0; i < marks.length; i++) {
	    	sumMarks += marks[i];
	    };
	    return sumMarks/marks.length;
	};

	let result = {};
	let allAverageMarks = [];

	for (let lesson in data) {
		let averageScores = getAverageMark(data[lesson]);
	  	result[lesson] = averageScores;
	  	allAverageMarks.push(averageScores);
	};

	result.average = getAverageMark(allAverageMarks);

	return result;
};

let allMarks = {
algebra: [2, 4, 5, 2, 3, 4],
geometry: [2, 4, 5],
russian: [3, 3, 4, 5],
physics: [5, 5],
music: [2, 2, 6],
english: [4, 4, 3],
poetry: [5, 3, 4],
chemistry: [2],
french: [4, 4]
};

console.log(getAverageScore(allMarks));