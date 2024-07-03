const countValue = document.getElementById('counter');

function increment() {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value + 1;
    // Set the value onto UI
    countValue.innerText = value;
};

function decrement() {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value - 1;
    // Set the value onto UI
    countValue.innerText = value;
};

function multiply() {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value by multiplying it by 2
    value = value * 2;
    // Set the value onto UI
    countValue.innerText = value;
};

function division() {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value by multiplying it by 2
    value = value / 2;
    // Set the value onto UI
    countValue.innerText = value;
};

