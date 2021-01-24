var rect = require ('./rectangle.js')

function solveRect(l,b) {
  console.log("Solving for rectang wideth with l = " + l + " and b = " + b)

  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimensions should be greater than zero l = " + l + " and b = " + b)
  } else {
    console.log("Ther area of the rectangle is " + rect.area(l, b))
    console.log("Ther perimeter of the rectangle is " + rect.perimeter(l, b))
  }
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,5)
