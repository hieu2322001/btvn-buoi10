class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    get getRadius() { return this.radius; }

    get getArea() {
        return (this.radius * this.radius * Math.PI).toFixed(2)
    }
}

let instance = new Circle(4, "blue")
console.log(instance.getRadius)
console.log(instance.getArea)

class Cylinder extends Circle {
    constructor(height, radius, color) {
        super(radius, color);
        this.height = height;
    }

    get getHeight() { return this.height; }

    get getVolume() {
        return super.getArea * this.height;
    }
}

let instance2 = new Cylinder(5, 6, "red")
console.log(instance2.getHeight)
console.log(instance2.radius)
console.log(instance2.color)
console.log(instance2.getVolume)

