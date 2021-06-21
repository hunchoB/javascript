"USE STRICT"

// let user = {
//     name: "John",
//     years: 30, 
//     isAdmin : true
// };

// let {name, years: age , isAdmin = false} = user;
// console.log (name);
// console.log (age);
// console.log (isAdmin);
function topSalary(salaries) {
    let max = 0;
    let nameHuman;
    if (Object.keys(salaries).length == 0) {
        return null;
    } else {
        for (let [name, sal] of Object.entries(salaries)) {
            if (max < sal) {
                max = sal;
                nameHuman = name;

            }
            
        }
    }
    return nameHuman;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(topSalary(salaries));