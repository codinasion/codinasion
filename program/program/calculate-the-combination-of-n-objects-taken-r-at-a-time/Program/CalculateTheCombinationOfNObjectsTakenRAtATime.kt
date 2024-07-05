package com.example.calculatethecombinationofnobjectstakenratatime

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
    val n = 5
    val r = 2
    val combinationResult = combination(n, r)
    println("Combination of $n objects taken $r at a time is: $combinationResult")
}

fun combination(n: Int, r: Int): Long {
    return if (r > n) {
        0
    } else {
        factorial(n) / (factorial(r) * factorial(n - r))
    }
}

fun factorial(num: Int): Long {
    if (num == 0 || num == 1) {
        return 1
    }
    var result = 1L
    for (i in 2..num) {
        result *= i
    }
    return result
}