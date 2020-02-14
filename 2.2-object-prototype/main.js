function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
let dateNow = Date.now();
let birthdayDate = new Date(birthday).getTime();
let diff = dateNow - birthdayDate;
let age = diff / 31557600000;
if (age >= 18) {
  return "Да";
}
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  let sound ;
  sound = animal.sound;
  if (animal === "indefined") {
    return null;
  } else {
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sumMarks = 0;
    let average = 0;
    for (let mark of marks) {
      mark = Number(mark);
      sumMarks += mark;
      average = sumMarks / marks.length;
    }
    roundedAverage = Math.round(average);
    return roundedAverage;

}