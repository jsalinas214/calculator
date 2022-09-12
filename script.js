// display the current time.
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

// gray buttons on calculator.
const acClear = document.querySelector('.ac');
const pmPlusMinus = document.querySelector('.pm');
const percentage = document.querySelector('.percentage');

// arithmatic operands.
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equal = document.querySelector('.equal');

// decimal and numbers
const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');

// destructured array.
const numberArray = [
   number0, number1, number2, number3, number4, 
   number5, number6, number7, number8, number9
];

// set the Current Time on Phone
const updateTime = () => {
   const currentTime = new Date();

   let currentHour = currentTime.getHours();
   let currentMin = currentTime.getMinutes();

   if (currentHour > 12) {
      currentHour -= 12;
   }

   hour.textContent = currentHour.toString();
   minute.textContent = currentMin.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();
