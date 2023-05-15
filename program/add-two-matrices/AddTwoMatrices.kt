fun main() {
    print("Enter the two matrices line separated: \n")
    val size = 3

    val a = readMatrix(size)
    readln()
    val b = readMatrix(size)

    val c = addMatrices(a, b)
    println("Result of adding the matrices: \n")
    printMatrix(c)
}

// Takes number of rows and columns and reads the matrix from input
fun readMatrix(rows : Int): ArrayList<ArrayList<Int>>{
    val matrix = arrayListOf<ArrayList<Int>>()
    for(row in 0 until rows){
        val line = readln().trim().split(' ')
        matrix.add(ArrayList())
        for(number in line){
            matrix[row].add(Integer.valueOf(number))
        }
    }
    return matrix
}

// prints a matrix
fun printMatrix(matrix : ArrayList<ArrayList<Int>>){
    for (row in matrix){
        for (cell in row){
            print("$cell ")
        }
        println()
    }
}

// adds two matrices and return the result in a new matrix
fun addMatrices(a : ArrayList<ArrayList<Int>>, b : ArrayList<ArrayList<Int>>) : ArrayList<ArrayList<Int>>{
    val c = a.clone() as ArrayList<ArrayList<Int>>
    for(i in 0 until b.size){
        for(j in 0 until b.size){
            c[i][j] += b[i][j]
        }
    }
    return c
}
