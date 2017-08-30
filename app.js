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
  // this.turnOn = function () {
  //
  // }
}
Computer.prototype.turnOn = function () {
  this.isOn = !this.isOn
}
Computer.prototype.memory = '256'
// Built in methods for Arrays and Objects

var names = [ 'tony', 'mike', 'jessica', 'joe', 'chris']

// forEach
brianEach(names, function (element, index) {
  console.log(element)
})
// tony
// mike
// jessica
// joe
// chris

function brianEach (arr, cb) {
  if (typeof arr === 'array') {
    for (var i = 0; i < arr.length; i++) {
      cb(arr[i], i)
    }
  } else {
    return new Error('hey bro send me an array')
  }
}

Array.prototype.tonyEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i)
  }
}

var names = [ 'tony', 'mike', 'jessica', 'joe', 'chris']
// lets re-create filter

names.filter(function cb (element, index) {
  return element[0] === 'j'
})

Array.prototype.tonyFilter = function (goblygoop) {
  var newArray = []
  for (var i = 0; i < this.length; i++) {
    if (goblygoop(this[i], i)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

// lets re-create reduce
var numArr = [4, 2, 0]
function cb (prevValue, currElement) {
  return prevValue + currElement // 0 + 4
}
numArr.reduce(cb)

Array.prototype.reduceMe = function (callback, initialValue) {
  var prevValue = initialValue || null
  // if(initialValue) var prevValue = initialValue
  for (var i = 0; i < this.length; i++) {
    if (prevValue) {
      prevValue = callback(prevValue, this[i]) // 4
    } else {
      prevValue = this[i]
    }
  }
  return prevValue
}
