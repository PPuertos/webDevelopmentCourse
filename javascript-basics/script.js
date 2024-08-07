function circle(radius) {
    this.radius = radius;

    this.area = function() {
        return Math.PI * Math.pow(this.radius,2)
    }
}

var mycircle = new circle(4);
console.log(mycircle)