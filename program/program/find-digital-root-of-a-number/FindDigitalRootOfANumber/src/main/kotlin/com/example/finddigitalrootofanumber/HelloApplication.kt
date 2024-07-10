package com.example.finddigitalrootofanumber

import javafx.application.Application
import javafx.fxml.FXMLLoader
import javafx.scene.Scene
import javafx.stage.Stage

class HelloApplication : Application() {
    override fun start(stage: Stage) {
        val fxmlLoader = FXMLLoader(HelloApplication::class.java.getResource("hello-view.fxml"))
        val scene = Scene(fxmlLoader.load(), 320.0, 240.0)
        stage.title = "Hello!"
        stage.scene = scene
        stage.show()
    }
}

fun main() {
    val number = 1234
    println("The digital root of $number is: ${digitalRoot(number)}")
}

fun digitalRoot(n: Int): Int {
    // Base case: if n is a single digit, return n
    if (n < 10) return n

    // Calculate the sum of digits of n
    var sum = 0
    var temp = n
    while (temp > 0) {
        sum += temp % 10
        temp /= 10
    }

    // Recursively call digitalRoot on the sum
    return digitalRoot(sum)
}