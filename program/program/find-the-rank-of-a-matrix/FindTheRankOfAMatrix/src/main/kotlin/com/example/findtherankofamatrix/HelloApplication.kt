package com.example.findtherankofamatrix

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
    val matrix = arrayOf(
        doubleArrayOf(1.0, 2.0, 3.0),
        doubleArrayOf(4.0, 5.0, 6.0),
        doubleArrayOf(7.0, 8.0, 9.0)
    )

    val rank = findRank(matrix)
    println("Rank of the matrix: $rank")
}

fun findRank(matrix: Array<DoubleArray>): Int {
    val rowCount = matrix.size
    val colCount = matrix[0].size

    val rrefMatrix = matrix.copyOf()

    var rank = 0
    for (col in 0 until colCount) {
        var pivotRow = rank

        while (pivotRow < rowCount && rrefMatrix[pivotRow][col] == 0.0) {
            pivotRow++
        }

        if (pivotRow == rowCount) continue

        val temp = rrefMatrix[rank]
        rrefMatrix[rank] = rrefMatrix[pivotRow]
        rrefMatrix[pivotRow] = temp

        val pivot = rrefMatrix[rank][col]
        for (j in col until colCount) {
            rrefMatrix[rank][j] /= pivot
        }

        for (i in 0 until rowCount) {
            if (i != rank) {
                val factor = rrefMatrix[i][col]
                for (j in col until colCount) {
                    rrefMatrix[i][j] -= factor * rrefMatrix[rank][j]
                }
            }
        }
        rank++
    }

    return rank
}