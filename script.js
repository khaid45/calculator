function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
function calculate() {
    const display = document.getElementById('display');
    try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      addToHistory(expression + ' = ' + result);
    } catch {
      display.value = 'Error';
    }
  }
  
  function addToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li); // adds the newest on top
  }
  
