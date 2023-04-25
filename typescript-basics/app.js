// Explicitly declared object
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Matt',
//     age: 30
// }
// Type infered object
var person = {
    name: 'Matt',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
