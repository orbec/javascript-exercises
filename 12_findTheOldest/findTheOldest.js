const findTheOldest = function(people) {
    return people.filter(
        (person) => {
            const maxAge = people.reduce(
                (a, obj) =>{
                    if (!obj.yearOfDeath) obj.yearOfDeath = new Date().getFullYear();
                    obj.age = obj.yearOfDeath - obj.yearOfBirth;
                    return Math.max(a,obj.age);
                }
            ,0);
            return person.age === maxAge;
        }
    )
    .at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
