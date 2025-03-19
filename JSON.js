console.log("JSON")

//can define arrays
//{key:value}

let student = {regno:'2021/ICT/01' , name: 'James' , age:21 , courses: 'IT' ,skills:['Java' , 'JS' ,'C++']}
console.log(student)
console.log(student.name)

let students = [
{regno:'2021/ict/01',name:'James', age:21, course:'IT'},
{regno:'2021/ict/02',name:'Ravi', age:22,course:'IT'},
{regno:'2021/ict/03',name:'Gaya', age:21,course:'IT'}
]
console.log(students)


console.log("------------------------")



//Define 10 students JSON
//Store it in an Array



let studentArray = [
{regno: '2021/ict/01', name:'John', age:25,gender:'Male', courses: 'IT' , gpa:3.8},
{regno: '2021/ict/02',name:'Ann',age:22 ,gender:'Female',courses: 'Engineering',gpa:3.5},
{regno: '2021/ict/03',name:'Ravi',age:21 ,gender:'Male',course:'Medicine',gpa:3.2},
{regno: '2021/ict/04',name:'Amelia',age:20,gender:'Female',course:'IT',gpa:3.3},
{regno: '2021/ict/05',name:'Henry',age:25,gender:'Male',course:'Medicine',gpa:3.1},
{regno: '2021/ict/06',name:'Noah',age:26,gender:'Male',course:'Engineering',gpa:2.9},
{regno: '2021/ict/07',name:'Charlotte', age:24,gender:'Female', course:'Medicine',gpa:3.0},
{regno: '2021/ict/08',name:'Ava',age:22,gender:'Female',course:'IT',gpa:2.8},
{regno: '2021/ict/09',name:'Emma',age:21,gender:'Female',course:'Engineering',gpa:2.7},
{regno: '2021/ict/10',name:'James',age:20,gender:'Male',course:'Medicine',gpa:3.4}
]



//Find the female students

console.log("Female students are:")

let femaleStudents = []

for(let i=0; i < studentArray.length ; i++){ 
    if(studentArray[i].gender === 'Female')
	{
		femaleStudents.push(studentArray[i])
	}
}

console.log(femaleStudents)


console.log("------------------------")




//Find the students who are following IT course

console.log("Students who are following IT course")

let itCourse =[]

for(let j=0; j < studentArray.length; j++)
{
	if(studentArray[j].course === 'IT')
	{
		itCourse.push(studentArray[j])
	}
}
console.log(itCourse)

console.log("-----------------------------")

//Find the max and average GPA among the students

console.log("The max and average GPA among the students")

let maxGpa = 0;
let totalGpa = 0;

for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].gpa > maxGpa) {
        maxGpa = studentArray[i].gpa;
    }
    totalGpa += studentArray[i].gpa;
}

let avgGpa = totalGpa / studentArray.length;


console.log("Max GPA:", maxGpa);
console.log("Average GPA:", avgGpa);