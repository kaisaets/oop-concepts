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
        return `Circle (r:{${this.#radius}}, color: {${this.getColor()}} ) `
    } 
} 

class Square extends Shape {
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    } 

    getArea(){
        return Math.pow(this.#side, 2)
    } 

    print(){
        return `Square (a:{${this.#side}}, color: {${this.getColor()}} )`
    } 
} 

class Rectangle extends Shape {
    #length
    #width
    constructor (color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    } 
    getArea(){
        return this.#length * this.#width
    } 
    print(){
        return `Rectangle (l:{${this.#length}}, w:{${this.#width}}, color:{${this.getColor()}})`
    } 
} 



const shape = new Shape('red')
console.log("Shape's color is", shape.getColor())
console.log("Shape's area is", shape.getArea())

const circle1 = new Circle('blue', 5)
console.log("Circle's color is", circle1.getColor())
console.log("Circle's area is", circle1.getArea())

const circle2 = new Circle('violet', 5)
console.log("Circle's color is", circle2.getColor())
console.log("Circle's area is", circle2.getArea())

const square = new Square ('green', 10)
console.log(square.print())
console.log('square area', square.getArea())

const rectangle = new Rectangle ('yellow', 5, 8)
console.log('rectangle data', rectangle.print())
console.log('rectangle area', rectangle.getArea())

class Paint{
    constructor(){
        this.shapes = [] 
    }  
    addShape(shape) {
        this.shapes.push(shape)
    } 
    getShapes (){
        return this.shapes 

    } 
    calculateTotalArea (){
        this.totalArea = 0
        this.shapes.forEach(shape =>{
            this.totalArea += shape.getArea()
        } )
        return this.totalArea
    } 
    getCircles(){
        this.circles = []
        this.circles = this.shapes.filter(shape => shape.constructor.name == 'Circle')
        return this.circles
    } 
    getSquares(){
        this.squares = []
        this.squares = this.shapes.filter(shape => shape.constructor.name == 'Square')
        return this.squares
    } 
    getRectangles(){
        this.rectangles = []
        this.rectangles = this.shapes.filter(shape => shape.constructor.name == 'Rectangle')
        return this.rectangles
    } 
} 

const paint = new Paint ()
paint.addShape(circle1)
paint.addShape(square)
paint.addShape(rectangle)
paint.addShape(circle2)

console.log(paint.getShapes())
console.log(paint.calculateTotalArea())
paint.getCircles().forEach(shape => console.log(shape.print()))
paint.getSquares().forEach(shape => console.log(shape.print()))
paint.getRectangles().forEach(shape => console.log(shape.print()))