var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  array = []
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}