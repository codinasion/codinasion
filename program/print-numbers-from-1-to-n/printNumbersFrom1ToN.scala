import scala.io.StdIn._;

object print1ToN {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        var cnt:Int=0;
        
        cnt=1;
        while(cnt<=n)
        {
            printf("%d ",cnt);
            cnt=cnt+1;
        }
    }
}
