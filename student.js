class Student {
    constructor(firstName, lastName, age){ 
        this.firstName = firstName
        this.lastName =lastName
        this.age = age
    }  
} 

class Person{
    constructor(){
        this.firstName = ""
        this.lastName = ""
        this.age = 0
    } 
} 

const student1 = new Student ("John", "Smith", 30)
const student2 = new Student ("John", "Doe", 40)
const student3 = new Student ("John", "Kennedy", 60)

const person1 = new Person
person1.firstName = "Mary"
person1.lastName = "March"
person1.age = 30

const person2 = new Person
person2.firstName = "Nele"
person2.lastName = "Ulvi"
person2.age = 33

const person3 = new Person
person3.firstName = "Margit"
person3.lastName = "Viigi"
person3.age = 30

console.log(student1, student2, student3)
console.log(person1, person2, person3)