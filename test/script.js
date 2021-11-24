//JS Block

//Task 1
let result = "";

function normalWord(word) {
    result = word.toLowerCase();
    result = result[0].toUpperCase() + result.slice(1, result.length);
    return result;
}

let word = "пИТЕР";

console.log(normalWord(word));

//Task 2
let name = prompt("Как тебя зовут?", "Mark");

function sayHello(name) {
    if(name === "Mark") {
        alert(`Hi, ${name}`);
    } else {
        alert(`Hello, ${name}`);
    }
}

if (name != null) {
    sayHello(name);
} else {
    alert("Вы не представились!");
}

//Task 3

let arrayStrings = ["abc", "a", "abc", "I love javaScr"];

function filterStrings(array, num) {
    let count, result = [];

    for(let i = 0; i < array.length; i++) {
        count = 0;

        for(let j = 0; j < array[i].length; j++) {
            count++;
        }

        if(count <= num) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filterStrings(arrayStrings, 13)); 




