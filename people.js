const people = ['a', 'b', 'c'];
const ages = [11, 22, 33]
console.log(people);


// ----Export modules different ways----

// module.exports = people; 

// module.exports = {
//     people: people,
//     ages: ages,
// };

module.exports = {
    people, ages
};