// Explicitly declared object
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Matt',
//     age: 30
// }

// Type infered object
const person = {
    name: 'Matt',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log( person.name );

for ( const hobby of person.hobbies ) {
    console.log( hobby );
    //console.log( hobby.map() ); // ERROR AS TS KNOWS HOBBY IS A STRING!
}