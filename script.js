// display the current time.
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');

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

let valueStringInMemory = null;
let operatorInMemory = null;


// functionality for value
const getValueAsString = () => value.textContent.split(',').join('');

const getValueAsNumber = () =>  parseFloat(getValueAsString());

const setStringAsValue = (valueString) => {
   if (valueString[valueString.length - 1] === '.') {
      value.textContent += '.';
      return;
   }

   const [wholeNumString, decimalString] = valueString.split('.');
   if (decimalString) {
      value.textContent = parseFloat(wholeNumString).toLocaleString() + '.' + decimalString;
   } else {
      value.textContent = parseFloat(wholeNumString).toLocaleString();
   }
};

const handleNumberClick = (numString) => {
   const currentValueString = getValueAsString();
   if (currentValueString === '0') {
      setStringAsValue(numString);
   } else {
      setStringAsValue(currentValueString + numString);
   }
};

const getOperationResultAsString = () => {
   const currentValueNumber = getValueAsNumber();
   const valueNumberInMemory = parseFloat(valueStringInMemory);
   let newValueNumber;

   if (operatorInMemory === 'addition') {
      newValueNumber = valueNumberInMemory + currentValueNumber;
   } else if (operatorInMemory === 'subtraction') {
      newValueNumber = valueNumberInMemory - currentValueNumber;
   } else if (operatorInMemory === 'multiplication') {
      newValueNumber = valueNumberInMemory * currentValueNumber;
   } else if (operatorInMemory === 'division') {
      newValueNumber = valueNumberInMemory / currentValueNumber;
   }

   return newValueNumber.toString();
};

const handleOperatorClick = (operation) => {
   const currentValueString = getValueAsString;

   if (!valueStringInMemory) {
      valueStringInMemory = currentValueString;
      operatorInMemory = operation;
      setStringAsValue('0');
      return;
   }

   valueStringInMemory = getOperationResultAsString();
   operatorInMemory = operation;
   setStringAsValue('0');
};


// adding Event Listeners
acClear.addEventListener('click', () => {
   setStringAsValue('0');
   valueStringInMemory = null;
   operatorInMemory = null;
});

pmPlusMinus.addEventListener('click', () => {
   const currentValueNumber = getValueAsNumber();
   const currentValueString = getValueAsString();

   if (currentValueString === '-0') {
      setStringAsValue('0');
      return
   }

   if (currentValueNumber >= 0) {
      setStringAsValue('-' + currentValueString);
   } else {
      setStringAsValue(currentValueString.substring(1));
   }
});

percentage.addEventListener('click', () => {
   const currentValueNumber = getValueAsNumber();
   const newValueNumber = currentValueNumber / 100;

   setStringAsValue(newValueNumber.toString());
   valueStringInMemory = null;
   operatorInMemory = null;
});


addition.addEventListener('click', () => {
   handleOperatorClick('addition');
});
subtraction.addEventListener('click', () => {
   handleOperatorClick('subtraction');
});
multiplication.addEventListener('click', () => {
   handleOperatorClick('multiplication');
});
division.addEventListener('click', () => {
   handleOperatorClick('division');
});

equal.addEventListener('click', () => {
   if (valueStringInMemory) {
      setStringAsValue(getOperationResultAsString());
      valueStringInMemory = null;
      operatorInMemory = null;
   }
});

for(let i = 0; i < numberArray.length; i++) {
   const number = numberArray[i];
   number.addEventListener('click', () => {
      handleNumberClick(i.toString());
   });
}

   decimal.addEventListener('click', () => {
      const currentValueString = getValueAsString();
      if (!currentValueString.includes('.')) {
         setStringAsValue(currentValueString + '.');
   }
});