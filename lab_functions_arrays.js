// Завдання 1. Створення масиву
const grades = [10, 8, 12, 7, 9, 11];

console.log("Оцінки студента:");
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

console.log("Загальна кількість оцінок:", grades.length);
console.log("-------------------------\n");


// Завдання 2. Функція підрахунку середнього бала
function calculateAverage(gradesArray) {
    let sum = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        sum += gradesArray[i];
    }
    return sum / gradesArray.length;
}


// Завдання 3. Функція пошуку найвищої оцінки
function findMaxGrade(gradesArray) {
    let maxGrade = gradesArray[0];
    for (let i = 1; i < gradesArray.length; i++) {
        if (gradesArray[i] > maxGrade) {
            maxGrade = gradesArray[i];
        }
    }
    return maxGrade;
}


// Завдання 4. Функція підрахунку високих оцінок (>= 10)
function countHighGrades(gradesArray) {
    let count = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 10) {
            count++;
        }
    }
    return count;
}


// Завдання 5. Виведення загального результату
function showResults(gradesArray) {
    const average = calculateAverage(gradesArray);
    const maxGrade = findMaxGrade(gradesArray);
    const highGradesCount = countHighGrades(gradesArray);

    console.log("===== АНАЛІЗ ОЦІНОК =====");
    console.log();
    console.log("Оцінки студента:", gradesArray.join(", "));
    console.log();
    console.log("Кількість оцінок:", gradesArray.length);
    console.log("Середній бал:", average);
    console.log("Найвища оцінка:", maxGrade);
    console.log("Кількість високих оцінок:", highGradesCount);
    console.log();
    console.log("=========================");
}

// Виклик головної функції для перевірки в консолі
showResults(grades);