const display = document.querySelector('.display '); 

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') handleClick(key);
  else if (key === '+') handleClick('+');
  else if (key === '-') handleClick('-');
  else if (key === '*') handleClick('×');
  else if (key === '/') handleClick('÷');
  else if (key === '.') handleClick('.');
  else if (key === 'Enter') handleClick('=');
  else if (key === 'Backspace') handleClick('backspace');
  else if (key === 'Escape') handleClick('C');
  else if (key === '%') handleClick('%');
  else if (key === '(') handleClick('(');
  else if (key === ')') handleClick(')');
});

let currentInput = '0';

function updateDisplay(value) {
    display.textContent = value;
}
function handleClick(value) {
  if (value === 'C') {
    currentInput = '0';
    updateDisplay(currentInput);
} else if (value === 'backspace') {
    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput = '0';
    }
    updateDisplay(currentInput);
} else if (value === '±') {
    currentInput = String(parseFloat(currentInput) * -1);
    updateDisplay(currentInput);
} else if (value === '%') {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay(currentInput);
} else if (value === '=') {
    currentInput = calculate(currentInput);
    updateDisplay(currentInput);
} else {
    if (currentInput === '0') {
      currentInput = value;
    } else {
      currentInput += value;
    }
    updateDisplay(currentInput);
  }
}

function calculate(input) {
    try {
        let result = input 
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        return String(eval(result));
    } catch (error) {
        return 'Error';
    }
}