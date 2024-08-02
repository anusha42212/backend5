const custom=require('./custom');

console.log(custom("sravani", "gangavarapu"));
console.log(custom("Anusha","baleboina"));



const math=require('./math');

console.log("\nInside math variable : ");
console.log(math);
console.log("\nSum is " +math.add(1,34));
console.log("Subtraction is " +math.subtract(25,7));
console.log("Multiplication is " +math.multiply(4,8));
console.log("Division is " +math.divide(8,4));