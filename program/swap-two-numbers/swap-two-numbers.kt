fun main() {
    var firstVar= 10
    var secondVar=20

    secondVar = firstVar.apply{firstVar = secondVar}
    println(firstVar) // prints 20
    println(secondVar) // prints 10
  }
