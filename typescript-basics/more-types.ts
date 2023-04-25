/**
 * CORE TYPES
 * string
 * number
 * boolean
 * object
 * array
 * tuple
 * enum
 * any
 */

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Explicitly declared object
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Matt',
//     age: 30
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [ number, string ] // this is a tuple
// } = {
//     name: 'Matt',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [ 2, 'author' ]
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

// Type infered object
const person = {
    name: 'Matt',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

//person.role.push(123); // Typescript cannot catch this and length of the tuple isn't enforced
//person.role = [1, 'admin', 123]; // Length is enforced here
//person.role[1] = 10; // Not assignable to the role tuple

let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log( person.name );

for ( const hobby of person.hobbies ) {
    console.log( hobby );
    //console.log( hobby.map() ); // ERROR AS TS KNOWS HOBBY IS A STRING!
}