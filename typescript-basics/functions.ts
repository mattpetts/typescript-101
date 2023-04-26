function add ( n1: number, n2: number ): number {
    return n1 + n2;
}

function addAndHandle ( n1: number, n2: number, cb: ( num: number ) => void ) {
    const result = n1 + n2;
    cb( result );
}

function printResult ( num: number ): void {
    console.log( 'Result:' + num )
}

printResult( add( 5, 12 ) )

// this works, but combineValues can be any function, we need it to be one that accepts two number params
// let combineValues: Function;

// combineValues = add;
// //combineValues = 5; // this doesn't work as it's not a function

// console.log( combineValues( 8, 8 ) )

// Now combineValues is more securely typed and we can't assign it as a function that would break
let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = 5; // this doesn't work as it's not a function

console.log( combineValues( 8, 8 ) );

addAndHandle( 10, 20, ( result ) => {
    console.log( result )
})