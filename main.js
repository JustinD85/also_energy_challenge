/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't forget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here
const groupEmployees = employees => (
    employees.reduce((acc, employee)=>{

      if(!acc[employee.group]){
        acc[employee.group] = []
      }
        acc[employee.group].push({name: `${employee.first} ${employee.last}`})
      return acc
    },{})
  )
/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
