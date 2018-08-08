let institution = (function(){
    let students = [{ 
        name: "Valentin",
        mark: 86
    },
    { 
        name: "Paul",
        mark: 94
    },
    { 
        name: "Olia",
        mark: 80
    },
    { 
        name: "Tania",
        mark: 71
    },
    { 
        name: "Natalia",
        mark: 83
    },
    { 
        name: "Petro",
        mark: 90
    },
    { 
        name: "Dima",
        mark: 65
    },
    { 
        name: "Ira",
        mark: 78
    },
    ];

    let intership = [];
    let sum = 0;
    let avgMark = 0;
    let mrk;

    for (i=0; i<students.length; i++) {
        mrk = students[i].mark;
        sum += mrk;       
    };
    avgMark = sum/students.length;

    let filterStudents = students.filter(studentMark => {
        return studentMark.mark > mrk;
    });

    return {     
        addStudents: function() {
                intership.push(filterStudents);

        },
            
        display: function(){
            console.log("List of all students: ", ...students);
            
            for (i=0; i<students.length; i++) {
                if (intership[0][i] !== undefined) {
                    console.log("Student with a higher mark than average: ", intership[0][i]);
                }
            }  
        }
    }
})();

institution.addStudents();
institution.display();