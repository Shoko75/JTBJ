let numbers = [6, 5, 7, 2];
let length = numbers.length;
let swapped;
do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let firstNumber = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = firstNumber;
        swapped = true;
      }
    }
} while (swapped);

console.log(numbers);
