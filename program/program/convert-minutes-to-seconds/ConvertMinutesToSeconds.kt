import java.util.concurrent.TimeUnit

fun main(args: Array<String>) {

    val minutes: Long = 180
    val seconds = TimeUnit.MINUTES.toSeconds(minutes)
    println("$minutes Minutes = $seconds seconds")
}