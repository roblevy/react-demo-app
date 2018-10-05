console.log('Intro to classes');

// An object factory
function StudentFactory(name, id) {
  const student = {};
  student.name = name;
  student.id = id;
  student.introduceSelf = function() {
    return 'My name is ' + this.name;
  };
  student.changeName = function(newName) {
    this.name = newName;
  };
  return student;
}

const studentNames = [
  'David', 'India', 'Lucia', 'Doris'
];

studentNames.forEach(function(studentName) {
  const student = StudentFactory(studentName);
  console.log(student.introduceSelf());
});

// Creating objects using classes
class Student {
  // YOUR CODE HERE
}
studentNames.forEach(function(studentName) {
  // YOUR CODE HERE
});
