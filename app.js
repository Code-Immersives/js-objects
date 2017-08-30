// creating objects in JS
Object.create({})
// new keyword
var obj = new Object()
var arr = new Array()
var str = new String()
// object literal notation
var car = {
  name: 'Honda',
  engineOn: false,
  wheels: 4,
  start: function () {
    this.engineOn = true
  }
}
// dot notation
car.name
car['name']
var something = 'name'
// a = ["ten", "twenty"]
// a[0]
car.something// will not work
console.log(car[something])// car['name'] will work
// Build a shoe object and give it 3 properties, one is a string,
//  another a boolean,
//  another is a method that changes the boolean
var shoe = {
  brand: 'nike',
  inStock: true,
  restock: function () {
    // var this = shoe
    this.inStock = !this.inStock
    // if(inStock){
    //   this.inStock = false
    // }else{
    //   this.inStock = true
    // }
  }
}
// js constructor functions / factories
function Shoe (pBrand, pQty, pSize, pColor) {
  // var this = {}
  this.brand = pBrand
  this.qty = pQty
  this.size = pSize
  this.color = pColor
  // return this
}

var airForceOnes = new Shoe('nike', 2, 11, 'white')
airForceOnes.brand // => nike

// create a computer constructor function with 4 properties.

function Computer (brand, year, size) {
  this.brand = brand
  this.color = 'green'
  this.year = year
  this.size = size
  this.isOn = false
  this.turnOn = function () {
    this.isOn = !this.isOn
  }
}
