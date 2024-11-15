class Student {
    #name
    #finished

    constructor(name){ 
        this.#name = name
        this.#finished = false
      
    }  
    getName (){
        return this.#name
    } 
    getFinished (){ 
        return this.#finished
    }
} 

const student = new Student ("John")
console.log(student)
console.log(student.getName())
console.log(student.getFinished())