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

let data = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5, 1],
  music: [5, 5],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [4],
  french: [4, 4, 5]
};
let averageLesson = 0;
let allAverageScore = {};

function getAverageScore(data) {
  for (let lesson in data) {
    let sumMarks = 0;
    for (let mark of data[lesson]) {
      sumMarks += mark;
      averageLesson = sumMarks / data[lesson].length;
    }
    allAverageScore[lesson] = averageLesson;
  }
  return allAverageScore;
}

getAverageScore(data);

let sumAllAverage = 0;
let average = 0;
function getAverageScoreAllLessons(allAverageScore) {
  let sumLessons = 0;
  for (let key in allAverageScore) {
    sumLessons ++;
    sumAllAverage += allAverageScore[key];
    average = sumAllAverage / sumLessons;
  }
  allAverageScore.average = average;
  return allAverageScore;
}

getAverageScoreAllLessons(allAverageScore);
console.log(allAverageScore);