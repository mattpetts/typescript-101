function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 32);
console.log(combineAges); // this works
var combineNames = combine('Matt', 'Dan');
console.log(combineNames); // this fails to compile before union types are added
