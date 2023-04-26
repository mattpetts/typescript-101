type Combinable = number | string
type Conversion = 'as-number' | 'as-string'

function combine( 
    input1: Combinable, 
    input2: Combinable,
    resultConversion: Conversion
) {
    
    let result;

    if ( typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

    // Using our literal string we can now check how to output the result
    // if ( resultConversion === 'as-number' ) {
    //     return +resultConversion;
    // } else {
    //     return result.toString()
    // }
}

const combineAges = combine( 30, 32, 'as-number' );
console.log(combineAges) // this works

const combineNames = combine( 'Matt', 'Dan', 'as-string' );
console.log(combineNames) // this fails to compile before union types are added