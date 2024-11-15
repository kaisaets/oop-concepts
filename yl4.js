class Shape{
    #color
    constructor(color){
        this.#color = color
    }
    setColor(color){
        this.#color = color
    }  
    getColor(){
        return this.#color
    } 
    getArea(){
        return null
    } 
} 
class Circle extends Shape{
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    } 

    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    } 

    print(){
        return `Circle (r:{${this.#radius}}, color: {${this.getColor}} )
    } 
} 

const shape1 = new Shape('red')
console.log("Shape's color is", shape1.getColor())
console.log("Shape's area is", shape1.getArea())

const circle1 = new Circle('blue', 5)
console.log("Circle's color is", circle1.getColor())
console.log("Circle's area is", circle1.getArea())