var globalVar = 'global';

function outerFunction() {
    var functionVar = 'function';

    if (true) {
        var blockVar = 'block';
        console.log(globalVar);  // Point 1
        console.log(functionVar);  // Point 2
        console.log(blockVar);  // Point 3
    }

    console.log(globalVar);  // Point 4
    console.log(functionVar);  // Point 5
    console.log(blockVar);  // Point 6
}

outerFunction();

console.log(globalVar);  // Point 7
console.log(functionVar);  // Point 8
console.log(blockVar);  // Point 9
