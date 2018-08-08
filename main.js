class Student{
    constructor(name, mark){
        this.name = name;
        this.mark = mark;
    }
    display(){
        console.log(this.name, this.mark);
    }
}

let intership = [];
let allStudents = [];

let tom = new Student("Tom", 78);
let tim = new Student("Tim", 67);
let adam = new Student("Adam", 85);
let alice = new Student("Alice", 94);
let kim = new Student("Kim", 81);

allStudents.push(tom, tim, adam, alice, kim);

let sum = 0;
let avgMark = 0;
let mrk;

for (i=0; i<allStudents.length; i++) {
   mrk = allStudents[i].mark;
   sum += mrk;       
};
avgMark = sum/allStudents.length;

let filterStudents = allStudents.filter(studentMark => {
    return studentMark.mark > mrk;
});

function addStudents(){
    intership.push(filterStudents);
}

function display(){
    console.log("List of all students: ", ...allStudents);
    
    for (i=0; i<allStudents.length; i++) {
        if (intership[0][i] !== undefined) {
            console.log("Student with a higher mark than average: ", intership[0][i]);
        }
    }  
}

addStudents();
display();